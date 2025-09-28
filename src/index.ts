import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {typeDefs} from "./schema.ts";
import {resolvers} from "./resolvers.ts";
import {InfrastructureApi} from "./datasources/infrastructure-api.ts";
import {ShowtimeApi} from "./datasources/showtime-api.ts";
import {MovieApi} from "./datasources/movie-api.ts";
import {BookingApi} from "./datasources/booking-api.ts";
import {UserApi} from "./datasources/user-api.ts";
import process from "node:process";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await startStandaloneServer(server, {
    context: ({ req }) => {

      const token: string = req.headers.authorization || '';

      const { cache } = server;
      return {
        dataSources: {
          infrastructureApi: new InfrastructureApi({ cache, token }),
          showtimeApi: new ShowtimeApi({ cache, token }),
          movieApi: new MovieApi({ cache, token }),
          bookingApi: new BookingApi({ cache, token }),
          userApi: new UserApi({ cache, token })
        }
      }
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${process.env.GRAPHQL_URL}graphql at port ${process.env.PORT}
  `);
}

await startApolloServer();