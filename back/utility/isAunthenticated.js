async function isAuthenticated(req, res, next) {
    /**
     * Checks if user is logged in
     * 
     * Does it by checking if there's an active session
     */
    if (!req.session.user) {
        res.sendStatus(401) // Unauthorized
        return
    }
    next()
}

module.exports = isAuthenticated