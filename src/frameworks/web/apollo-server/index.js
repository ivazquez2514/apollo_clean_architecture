const { ApolloServer } = require('apollo-server-express');
const db = require('../../persistence/db.json')

const typeDefs = require('./types');
const resolvers = require('./resolvers')({ db });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return { db };
    }
});

module.exports = server;