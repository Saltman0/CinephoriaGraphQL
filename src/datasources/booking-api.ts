import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { BookingModel, BookingSeatModel } from "../models.ts";

export class BookingApi extends RESTDataSource {
    override baseURL = "http://172.18.0.6/";
    private readonly token: string;

    constructor(options: { token: string; cache: KeyValueCache }) {
        super(options);
        this.token = options.token;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['authorization'] = this.token;
    }

    getBookings(userId: number): Promise<BookingModel[]> {
        return this.get<BookingModel[]>(`booking/${encodeURIComponent(userId)}`);
    }

    getBookingSeats(bookingId: number): Promise<BookingSeatModel[]> {
        return this.get<BookingSeatModel[]>(`booking/${encodeURIComponent(bookingId)}/bookingSeats`);
    }
}