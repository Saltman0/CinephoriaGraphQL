import { RESTDataSource } from "@apollo/datasource-rest";
import { BookingModel, BookingSeatModel } from "../models.ts"

export class BookingApi extends RESTDataSource {
    override baseURL = "http://172.18.0.6/";

    getBookings(userId: string): Promise<BookingModel[]> {
        return this.get<BookingModel[]>(`booking/${encodeURIComponent(userId)}`);
    }

    getBookingSeats(bookingId: string): Promise<BookingSeatModel[]> {
        return this.get<BookingSeatModel[]>(`booking/${encodeURIComponent(bookingId)}/bookingSeats`);
    }
}