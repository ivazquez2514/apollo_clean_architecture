module.exports = ({ db }) => {
    return ({
        books: () => db.books
    });
}