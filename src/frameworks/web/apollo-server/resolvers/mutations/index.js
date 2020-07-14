const bookResolvers = require('./book.resolvers')

module.exports = {
    Mutation: {
        ...bookResolvers
    }
}