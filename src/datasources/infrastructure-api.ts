import { RESTDataSource } from "@apollo/datasource-rest";
import { HallModel, IncidentModel } from "../models.ts"

export class InfrastructureApi extends RESTDataSource {
    override baseURL = "http://172.18.0.6/";

    getHalls(cinemaId: string): Promise<HallModel[]> {
      return this.get<HallModel[]>(`cinema/${encodeURIComponent(cinemaId)}/hall`);
    }

    getIncidents(hallId: string): Promise<IncidentModel[]> {
        return this.get<IncidentModel[]>(`hall/${encodeURIComponent(hallId)}/incident`);
    }
}