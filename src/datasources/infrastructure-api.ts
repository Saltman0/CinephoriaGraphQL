import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { HallModel, IncidentModel, SeatModel } from "../models.ts";

export class InfrastructureApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;
    private readonly token: string;

    constructor(options: { token: string; cache: KeyValueCache }) {
        super(options);
        this.token = options.token;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['authorization'] = this.token;
    }

    getHalls(cinemaId: number): Promise<HallModel[]> {
      return this.get<HallModel[]>(`cinema/${encodeURIComponent(cinemaId)}/hall`);
    }

    getHall(hallId: number): Promise<HallModel> {
        return this.get<HallModel>(`hall/${encodeURIComponent(hallId)}`);
    }

    getSeat(seatId: number): Promise<SeatModel> {
        return this.get<SeatModel>(`seat/${encodeURIComponent(seatId)}`);
    }

    getIncidents(hallId: number): Promise<IncidentModel[]> {
        return this.get<IncidentModel[]>(`hall/${encodeURIComponent(hallId)}/incident`);
    }
}