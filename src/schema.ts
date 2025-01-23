import gql from "graphql-tag";

export const typeDefs = gql`#graphql

    type Query {
        halls(cinemaId: ID!): [Hall!]!
        bookings(userId: ID!): [Booking!]!
    }

    type Booking {
        id: ID!
        qrCode: String!
        user: User!
        showtime: Showtime!
        bookingSeats: [BookingSeat!]!
    }

    type BookingSeat {
        id: ID!
        booking: Booking!
        seat: Seat!
    }

    type Seat {
        id: ID!
        row: String!
        number: Int!
        hall: Hall!
    }

    type User {
        id: ID!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        phoneNumber: String!
        role: String!
    }

    type Cinema {
        id: ID!
        name: String!
        address: String!
        postalCode: Int!
        city: String!
        phoneNumber: String!
        openHour: String!
        closeHour: String!
    }

    type Hall {
        id: ID!
        number: Int!
        projectionQuality: String!
        cinema: Cinema!
        currentShowtime: Showtime
        incidents: [Incident!]!
    }

    type Incident {
        id: ID!
        type: String!
        description: String!
        hall: Hall!
    }

    type Showtime {
        id: ID!
        startTime: String!
        endTime: String!
        price: Int!
        movie: Movie!
        hall: Hall!
    }

    type Movie {
        id: ID!
        title: String!
        description: String!
        minimumAge: Int
        favorite: Boolean!
        imageURL: String!
    }
`;