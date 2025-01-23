import { RESTDataSource } from "@apollo/datasource-rest";
import { ShowtimeModel } from "../models.ts"

export class ShowtimeApi extends RESTDataSource {
    override baseURL = "http://172.18.0.6/";

    getShowtime(id: string): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/${encodeURIComponent(id)}`)
    }

    getCurrentShowtime(hallId: string): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/current-showtime/${encodeURIComponent(hallId)}`);
    }
}