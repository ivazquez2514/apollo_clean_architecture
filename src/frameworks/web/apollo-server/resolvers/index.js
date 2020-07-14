const mutations = require('./mutations')
const queries = require('./queries')

module.exports = ({ db }) => {
    return {
        ...queries({ db }),
        ...mutations,
    }
}