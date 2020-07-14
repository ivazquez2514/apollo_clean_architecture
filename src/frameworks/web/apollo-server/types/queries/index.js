const bookQueries = require('./book.queries');
const authorQueries = require('./author.queries');

module.exports = `
    type Query {
        ${ bookQueries }
        ${ authorQueries }
    }
`;