import {Resolvers} from "./types.ts";

export const resolvers: Resolvers = {
  Query: {
    cinemas: (_, __, { dataSources }) => {
      return dataSources.infrastructureApi.getCinemas();
    },
    halls: (_, { cinemaId }, { dataSources }) => {
      return dataSources.infrastructureApi.getHalls(cinemaId);
    },
    seats: (_, { hallId }, { dataSources }) => {
      return dataSources.infrastructureApi.getSeats(hallId);
    },
    movies: (_, __, { dataSources }) => {
      return dataSources.movieApi.getMovies();
    },
    bookings: (_, { userId, showtimeId }, { dataSources }) => {
      return dataSources.bookingApi.getBookings(userId, showtimeId);
    },
    showtimes: (_, { movieId }, { dataSources }) => {
      return dataSources.showtimeApi.getShowtimes(movieId);
    },
    users: (_, __, { dataSources }) => {
      return dataSources.userApi.getUsers();
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
  Movie: {
    showtimes: ({ id }, _, { dataSources }) => {
      return dataSources.showtimeApi.getShowtimes(id);
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
    },
    user: ({ userId }, _, { dataSources }) => {
      return dataSources.userApi.getUser(userId);
    }
  },
  BookingSeat: {
    seat: ({ seatId }, _, { dataSources }) => {
      return dataSources.infrastructureApi.getSeat(seatId);
    }
  }
}