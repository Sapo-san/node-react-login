const { Router } = require('express')
const getUserByEmail = require('../queries/getUserByEmail')
const isAuthenticated = require('../utility/isAunthenticated')

const protectedRoutes = Router();

protectedRoutes.get('/', isAuthenticated, async (req, res) => {
    /**
     * Protected Route
     * 
     * Sends a random message with a specific email on it
     */

    let currentUser = await getUserByEmail(req.session.user.email)

    console.log(currentUser)

    messages = [
        `Hello there, user with ID: ${currentUser.user_id}`,
        `Your session expires at ${req.session.cookie._expires.toString()}`,
        "👀"
    ]

    let index = Math.floor(Math.random() * messages.length);

    res.send(messages[index])

})

module.exports = protectedRoutes