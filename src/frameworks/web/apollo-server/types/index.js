const queries = require('./queries');
const schema = require('./schemas');
const mutations = require('./mutations');
const { gql } = require('apollo-server-express')

module.exports = gql`
    ${ schema },
    ${ queries }
    ${ mutations },
`;