import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          Hall: "./models#HallModel",
          Showtime: "./models#ShowtimeModel",
          Movie: "./models#MovieModel",
          Incident: "./models#IncidentModel",
          Booking: "./models#BookingModel",
          BookingSeat: "./models#BookingSeatModel",
          Seat: "./models#SeatModel",
          User: "./models#UserModel"
        },
      },
    },
  },
};

export default config;