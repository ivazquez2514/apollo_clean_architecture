module.exports = {
    addBook: (root, { title }) => ({ title, author: { name: 'Isaac' } })
}