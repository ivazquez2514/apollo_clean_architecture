let bookQueries = require('./book.queries');

module.exports = ({ db }) => {
    bookQueries = bookQueries({ db });

    return ({
        Query: {
            ...bookQueries
        }
    });
};