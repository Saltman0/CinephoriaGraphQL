import {RESTDataSource} from "@apollo/datasource-rest";
import {CategoryModel, MovieModel, RatingModel} from "../models.ts";
import process from "node:process";

export class MovieApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;

    getCategory(categoryId: number): Promise<CategoryModel> {
        return this.get<CategoryModel>(`category/${encodeURIComponent(categoryId)}`);
    }

    getCategories(): Promise<CategoryModel> {
        return this.get<CategoryModel>(`category`);
    }

    getMovie(movieId: number): Promise<MovieModel> {
      return this.get<MovieModel>(`movie/${encodeURIComponent(movieId)}`);
    }

    getMovies(categoryId: number|null): Promise<MovieModel> {
        let url: string = "movie";

        let params: string[] = [];

        if (categoryId) {
            params.push(`categoryId=${encodeURIComponent(categoryId)}`);
        }

        if (params.length > 0) {
            url += "?" + params.join("&");
        }

        return this.get<MovieModel>(url);
    }

    getRatings(movieId: number|null): Promise<RatingModel[]> {
        if (movieId) {
            return this.get<RatingModel[]>(`rating?movieId=${encodeURIComponent(movieId)}`);
        }

        return this.get<RatingModel[]>("rating");
    }
}