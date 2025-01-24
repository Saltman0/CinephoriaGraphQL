import { RESTDataSource } from "@apollo/datasource-rest";
import {HallModel, IncidentModel, SeatModel} from "../models.ts"

export class InfrastructureApi extends RESTDataSource {
    override baseURL = "http://172.18.0.6/";

    getHalls(cinemaId: string): Promise<HallModel[]> {
      return this.get<HallModel[]>(`cinema/${encodeURIComponent(cinemaId)}/hall`);
    }

    getHall(hallId: string): Promise<HallModel> {
        return this.get<HallModel>(`hall/${encodeURIComponent(hallId)}`);
    }

    getSeat(seatId: string): Promise<SeatModel> {
        return this.get<SeatModel>(`seat/${encodeURIComponent(seatId)}`);
    }

    getIncidents(hallId: string): Promise<IncidentModel[]> {
        return this.get<IncidentModel[]>(`hall/${encodeURIComponent(hallId)}/incident`);
    }
}