import gql from "graphql-tag";

export const typeDefs = gql`#graphql

    type Query {
        halls(cinemaId: Int!): [Hall!]!
        bookings(userId: Int!): [Booking!]!
        users: [User!]!
    }

    type Booking {
        id: Int!
        qrCode: String!
        user: User!
        showtime: Showtime!
        bookingSeats: [BookingSeat!]!
    }

    type BookingSeat {
        id: Int!
        booking: Booking!
        seat: Seat!
    }

    type Seat {
        id: Int!
        row: String!
        number: Int!
        hall: Hall!
    }

    type User {
        id: Int!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        phoneNumber: String!
        role: String!
    }

    type Cinema {
        id: Int!
        name: String!
        address: String!
        postalCode: Int!
        city: String!
        phoneNumber: String!
        openHour: String!
        closeHour: String!
    }

    type Hall {
        id: Int!
        number: Int!
        projectionQuality: String!
        cinema: Cinema!
        currentShowtime: Showtime
        incidents: [Incident!]!
    }

    type Incident {
        id: Int!
        type: String!
        description: String!
        date: String!
        solved: Boolean!
        hall: Hall!
    }

    type Showtime {
        id: Int!
        startTime: String!
        endTime: String!
        price: Int!
        movie: Movie!
        hall: Hall!
    }

    type Movie {
        id: Int!
        title: String!
        description: String!
        minimumAge: Int
        favorite: Boolean!
        imageURL: String!
    }
`;