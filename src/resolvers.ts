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
    categories: (_, __, { dataSources }) => {
      return dataSources.movieApi.getCategories();
    },
    movies: (_, { categoryId }, { dataSources }) => {
      return dataSources.movieApi.getMovies(categoryId);
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
    },
    seats: ({ id }, _, { dataSources }) => {
      return dataSources.infrastructureApi.getSeats(id);
    }
  },
  Movie: {
    category: ({ categoryId }, _, { dataSources }) => {
        return dataSources.movieApi.getCategory(categoryId);
    },
    ratings: ({ id }, _, { dataSources }) => {
      return dataSources.movieApi.getRatings(id);
    },
    showtimes: (
        { id },
        { startDate, endDate },
        { dataSources }
    ) => {
      return dataSources.showtimeApi.getShowtimes(id, startDate, endDate);
    }
  },
  Showtime: {
    movie: ({ movieId }, _, { dataSources }) => {
      return dataSources.movieApi.getMovie(movieId);
    },
    hall: ({ hallId }, { cinemaId }, { dataSources }) => {
      return dataSources.infrastructureApi.getHall(hallId, cinemaId);
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