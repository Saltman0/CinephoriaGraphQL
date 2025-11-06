import {RESTDataSource} from "@apollo/datasource-rest";
import {ShowtimeModel} from "../models.ts";
import process from "node:process";

export class ShowtimeApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;

    getShowtimes(movieId: number|null, startDate: string|null, endDate: string|null): Promise<ShowtimeModel[]> {
        let url = "showtime";

        let params: string[] = [];

        if (movieId !== null) {
            params.push(`movieId=${encodeURIComponent(movieId)}`);
        }

        if (startDate) {
            params.push(`startDate=${encodeURIComponent(startDate)}`);
        }

        if (endDate) {
            params.push(`endDate=${encodeURIComponent(endDate)}`);
        }

        if (params.length > 0) {
            url += "?" + params.join("&");
        }

        return this.get<ShowtimeModel[]>(url);
    }

    getShowtime(showtimeId: number): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/${encodeURIComponent(showtimeId)}`);
    }

    getCurrentShowtime(hallId: number): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/current-showtime/?hallId=${encodeURIComponent(hallId)}`);
    }
}