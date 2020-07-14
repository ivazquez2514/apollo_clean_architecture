const bookSchema = require('./book.schema');
const authorSchema = require('./author.schema');

module.exports = `
    ${ bookSchema }
    ${ authorSchema }
`;