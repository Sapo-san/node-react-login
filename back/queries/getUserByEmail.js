const { User } = require('../database')

async function getUserByEmail(email) {
    
    let userToFind = await User.findOne({
        where: {
            email: email
        }
    })

    return userToFind
}

module.exports = getUserByEmail