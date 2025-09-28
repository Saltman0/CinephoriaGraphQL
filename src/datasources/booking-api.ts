import {RESTDataSource, AugmentedRequest} from "@apollo/datasource-rest";
import {KeyValueCache} from "@apollo/utils.keyvaluecache";
import {BookingModel, BookingSeatModel} from "../models.ts";
import process from "node:process";

export class BookingApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;
    private readonly token: string;

    constructor(options: { token: string; cache: KeyValueCache }) {
        super(options);
        this.token = options.token;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['authorization'] = this.token;
    }

    getBookings(userId: number, showtimeId: number): Promise<BookingModel[]> {
        if (userId !== null && showtimeId !== null) {
            return this.get<BookingModel[]>(`booking?userId=${encodeURIComponent(userId)}&showtimeId=${encodeURIComponent(showtimeId)}`);
        }
        if (userId !== null) {
            return this.get<BookingModel[]>(`booking?userId=${encodeURIComponent(userId)}`);
        }
        if (showtimeId !== null) {
            return this.get<BookingModel[]>(`booking?showtimeId=${encodeURIComponent(showtimeId)}`);
        }

        return this.get<BookingModel[]>("booking");
    }

    getBookingSeats(bookingId: number): Promise<BookingSeatModel[]> {
        return this.get<BookingSeatModel[]>(`booking/${encodeURIComponent(bookingId)}/bookingSeats`);
    }
}