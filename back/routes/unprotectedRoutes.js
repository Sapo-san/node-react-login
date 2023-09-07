const { Router } = require('express')

const unprotectedRoutes = Router();

unprotectedRoutes.get('/', (req, res) => {
    /**
     * Unprotected route
     * 
     * Sends a random message back
     */
    
    messages = [
        "Hello there!",
        "Have a nice day",
        "👀"
    ]

    let index = Math.floor(Math.random() * messages.length);

    res.send(messages[index])
})

module.exports = unprotectedRoutes