const { gql } = require('apollo-server-express');
const bookMutations = require('./book.mutations');

module.exports = gql`
    type Mutation {
        ${ bookMutations }
    }
`;