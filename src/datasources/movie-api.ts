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

    getMovies(): Promise<MovieModel> {
        return this.get<MovieModel>(`movie`);
    }

    getRatings(movieId: number|null): Promise<RatingModel[]> {
        if (movieId !== null) {
            return this.get<RatingModel[]>(`rating?movieId=${encodeURIComponent(movieId)}`);
        }

        return this.get<RatingModel[]>("rating");
    }
}