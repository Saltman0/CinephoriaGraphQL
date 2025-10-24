import {RESTDataSource} from "@apollo/datasource-rest";
import {UserModel} from "../models.ts";
import process from "node:process";

export class UserApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;

    getUser(userId: number): Promise<UserModel> {
        return this.get<UserModel>(`user/${encodeURIComponent(userId)}`);
    }

    getUsers(): Promise<UserModel[]> {
        return this.get<UserModel[]>(`user`);
    }
}