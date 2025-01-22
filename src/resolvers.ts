import { Resolvers } from "./types.ts";

export const resolvers: Resolvers = {
  Query: {
    halls: (_, { cinemaId }, { dataSources }) => {
      return dataSources.infrastructureApi.getHalls(cinemaId);
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
    }
  }
}