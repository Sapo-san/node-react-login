// Imports
const { Router } = require('express')
const auth =  require('./routes/auth')
const unprotectedRoutes =  require('./routes/unprotectedRoutes')
const protectedRoutes =  require('./routes/protectedRoutes')

// Router
const router = Router()

router.use('/auth', auth)
router.use('/protected', protectedRoutes)
router.use('/unprotected', unprotectedRoutes)

router.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = router