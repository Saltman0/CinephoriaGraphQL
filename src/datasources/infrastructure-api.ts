import {RESTDataSource} from "@apollo/datasource-rest";
import {CinemaModel, HallModel, IncidentModel, SeatModel} from "../models.ts";
import process from "node:process";

export class InfrastructureApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;

    getCinemas(): Promise<CinemaModel[]> {
        return this.get<HallModel[]>("cinema");
    }

    getHalls(cinemaId: number|null): Promise<HallModel[]> {
        if (cinemaId !== null) {
            return this.get<HallModel[]>(`hall?cinemaId=${encodeURIComponent(cinemaId)}`);
        }

        return this.get<HallModel[]>("hall");
    }

    getHall(hallId: number): Promise<HallModel> {
        return this.get<HallModel>(`hall/${encodeURIComponent(hallId)}`);
    }

    getSeats(hallId: number|null): Promise<SeatModel[]> {
        if (hallId !== null) {
            return this.get<SeatModel[]>(`seat?hallId=${encodeURIComponent(hallId)}`);
        }

        return this.get<SeatModel[]>("seat");
    }

    getSeat(seatId: number): Promise<SeatModel> {
        return this.get<SeatModel>(`seat/${encodeURIComponent(seatId)}`);
    }

    getIncidents(hallId: number): Promise<IncidentModel[]> {
        return this.get<IncidentModel[]>(`incident?hallId=${encodeURIComponent(hallId)}`);
    }
}