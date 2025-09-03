import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import {ShowtimeModel} from "../models.ts"

export class ShowtimeApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;
    private readonly token: string;

    constructor(options: { token: string; cache: KeyValueCache }) {
        super(options);
        this.token = options.token;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['authorization'] = this.token;
    }

    getShowtimes(movieId: number): Promise<ShowtimeModel[]> {
        return this.get<ShowtimeModel[]>(`showtime?movieId=${encodeURIComponent(movieId)}`);
    }

    getShowtime(showtimeId: number): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/${encodeURIComponent(showtimeId)}`);
    }

    getCurrentShowtime(hallId: number): Promise<ShowtimeModel> {
        return this.get<ShowtimeModel>(`showtime/current-showtime/?hallId=${encodeURIComponent(hallId)}`);
    }
}