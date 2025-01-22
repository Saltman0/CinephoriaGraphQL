import gql from "graphql-tag";

export const typeDefs = gql`#graphql

    type Query {
        halls(cinemaId: ID!): [Hall!]!
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