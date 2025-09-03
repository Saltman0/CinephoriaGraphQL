import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { MovieModel } from "../models.ts"

export class MovieApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;
    private readonly token: string;

    constructor(options: { token: string; cache: KeyValueCache }) {
        super(options);
        this.token = options.token;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['authorization'] = this.token;
    }

    getMovie(movieId: number): Promise<MovieModel> {
      return this.get<MovieModel>(`movie/${encodeURIComponent(movieId)}`);
    }

    getMovies(): Promise<MovieModel> {
        return this.get<MovieModel>(`movie`);
    }
}