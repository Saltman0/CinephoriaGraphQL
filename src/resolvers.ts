import { Resolvers } from "./types.ts";

export const resolvers: Resolvers = {
  Query: {
    halls: (_, { cinemaId }, { dataSources }) => {
      return dataSources.infrastructureApi.getHalls(cinemaId);
    },
    bookings: (_, { userId }, { dataSources }) => {
      return dataSources.bookingApi.getBookings(userId);
    }
  },
  Hall: {
    currentShowtime: ({ id }, _, { dataSources }) => {
      return dataSources.showtimeApi.getCurrentShowtime(id);
    },
    incidents: ({ id }, _, { dataSources }) => {
      return dataSources.infrastructureApi.getIncidents(id);
    }
  },
  Showtime: {
    movie: ({ movieId }, _, { dataSources }) => {
      return dataSources.movieApi.getMovie(movieId);
    },
    hall: ({ hallId }, _, { dataSources }) => {
      return dataSources.infrastructureApi.getHall(hallId);
    }
  },
  Booking: {
    showtime: ({ showtimeId }, _, { dataSources }) => {
      return dataSources.showtimeApi.getShowtime(showtimeId);
    },
    bookingSeats: ({ id }, _, { dataSources }) => {
      return dataSources.bookingApi.getBookingSeats(id);
    }
  },
  BookingSeat: {
    seat: ({ seatId }, _, { dataSources }) => {
      return dataSources.infrastructureApi.getSeat(seatId);
    }
  }
}