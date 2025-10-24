import {RESTDataSource} from "@apollo/datasource-rest";
import {BookingModel, BookingSeatModel} from "../models.ts";
import process from "node:process";

export class BookingApi extends RESTDataSource {
    override baseURL = process.env.GRAPHQL_URL as string;

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