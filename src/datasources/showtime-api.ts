import {RESTDataSource} from "@apollo/datasource-rest";
import {ShowtimeModel} from "../models.ts";
import process from "node:process";

export class ShowtimeApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;

    getShowtimes(movieId: number): Promise<ShowtimeModel[]> {
        if (movieId !== null) {
            return this.get<ShowtimeModel[]>(`showtime?movieId=${encodeURIComponent(movieId)}`);
        }

        return this.get<ShowtimeModel[]>(`showtime`);
    }

    getShowtime(showtimeId: number): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/${encodeURIComponent(showtimeId)}`);
    }

    getCurrentShowtime(hallId: number): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/current-showtime/?hallId=${encodeURIComponent(hallId)}`);
    }
}