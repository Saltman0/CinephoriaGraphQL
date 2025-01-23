import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.ts";
import { resolvers } from "./resolvers.ts";
import { InfrastructureApi } from "./datasources/infrastructure-api.ts";
import { ShowtimeApi } from "./datasources/showtime-api.ts";
import { MovieApi } from "./datasources/movie-api.ts";
import { BookingApi } from "./datasources/booking-api.ts";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    /*listen: { port: process.env.PORT || 4000 },*/
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          infrastructureApi: new InfrastructureApi({ cache }),
          showtimeApi: new ShowtimeApi({ cache }),
          movieApi: new MovieApi({ cache }),
          bookingApi: new BookingApi({ cache })
        }
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

await startApolloServer();