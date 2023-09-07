const { User } = require('../database')

async function createUser(email, encrypted_password) {// Save to database
    
    let newUser = User.create({
        email: email,
        password: encrypted_password
    })

    return newUser
}

module.exports = createUser