const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();

const PORT = process.env.PORT || 3000;

const typeDefs = gql`
    type Book {
        title: String
        author: Author
    }

    type Author {
        name: String,
        books: [Book]
    }

    type Query {
        books: [Book],
        authors: [Author]
    }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
        name: 'J.K. Rowling'
    },
  },
  {
    title: 'Jurassic Park',
    author: {
        name: 'Michael Crichton'
    },
  },
];

const authors = [
    {
        id: 1,
        name: 'J.K. Rowling'
    },
    {
        id: 2,
        name: 'Michael Crichton'
    },
]

const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));