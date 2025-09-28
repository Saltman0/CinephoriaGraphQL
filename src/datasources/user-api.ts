import {RESTDataSource, AugmentedRequest} from "@apollo/datasource-rest";
import {KeyValueCache} from "@apollo/utils.keyvaluecache";
import {UserModel} from "../models.ts";
import process from "node:process";

export class UserApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;
    private readonly token: string;

    constructor(options: { token: string; cache: KeyValueCache }) {
        super(options);
        this.token = options.token;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['authorization'] = this.token;
    }

    getUser(userId: number): Promise<UserModel> {
        return this.get<UserModel>(`user/${encodeURIComponent(userId)}`);
    }

    getUsers(): Promise<UserModel[]> {
        return this.get<UserModel[]>(`user`);
    }
}