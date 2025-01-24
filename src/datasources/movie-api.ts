import { RESTDataSource } from "@apollo/datasource-rest";
import { MovieModel } from "../models.ts"

export class MovieApi extends RESTDataSource {
    override baseURL = "http://172.18.0.6/";

    getMovie(movieId: string): Promise<MovieModel> {
      return this.get<MovieModel>(`movie/${encodeURIComponent(movieId)}`);
    }
}