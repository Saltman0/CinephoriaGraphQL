import { InfrastructureApi } from "./datasources/infrastructure-api.ts";
import { ShowtimeApi } from "./datasources/showtime-api.ts";
import { MovieApi } from "./datasources/movie-api.ts";
import { BookingApi } from "./datasources/booking-api.ts";

export type DataSourceContext = {
  dataSources: {
    infrastructureApi: InfrastructureApi,
    showtimeApi: ShowtimeApi,
    movieApi: MovieApi,
    bookingApi: BookingApi
  }
}