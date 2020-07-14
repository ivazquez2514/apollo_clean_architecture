const express = require('express');
const apolloServer = require('./frameworks/web/apollo-server');
const app = express();

const PORT = process.env.PORT || 3000;

apolloServer.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${ apolloServer.graphqlPath }`));