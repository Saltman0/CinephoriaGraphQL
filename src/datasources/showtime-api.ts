import { RESTDataSource } from "@apollo/datasource-rest";
import { ShowtimeModel } from "../models.ts"

export class ShowtimeApi extends RESTDataSource {
    override baseURL = "http://172.18.0.6/";

    getShowtime(showtimeId: string): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/${encodeURIComponent(showtimeId)}`);
    }

    getCurrentShowtime(hallId: string): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/current-showtime/?hallId=${encodeURIComponent(hallId)}`);
    }
}