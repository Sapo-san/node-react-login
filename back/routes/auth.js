const { Router } = require('express')
const bcrypt = require('bcrypt');
const createUser = require('../queries/createUser')
const getUserByEmail = require('../queries/getUserByEmail')

const auth = Router();

auth.post('/register', async (req, res) => {
    try {
        // get from body
        const { email, password } = req.body

        // verify if user doesn't already exist
        let potentialUser = await getUserByEmail(email)
        if (potentialUser) {
            console.log("User already registered.")
            res.sendStatus(400)
            return
        }

        // encrypt password
        let error, encrypted_password = await bcrypt.hash(
            password,
            10 // Salt rounds
        )

        if (error) {
            res.sendStatus(500)
        }
        
        // create user
        await createUser(email, encrypted_password)

        // send response
        res.sendStatus(200)

    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
    
})

auth.post('/login', async (req, res) => {
    try {
        // get from body
        const { email, password } = req.body

        if (req.session.user && req.session.user.email) {
            res.sendStatus(202)
            return
        }

        // get user from DB
        let user = await getUserByEmail(email)

        if (!user) {
            res.sendStatus(400)
            return
        }

        // compare passwords
        let error, passwordsEqual  = await bcrypt.compare(password, user.password)

        if (error || !passwordsEqual) {
            res.sendStatus(400)
            return
        }

        // set session
        console.log(req.session)
        req.session.user = {
            email: user.email
        }

        // send response
        res.send({ status: 200 })

    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

auth.get('/logout', (req, res) => {

    try {
        req.session.destroy()
        res.sendStatus(200)    
    } catch(error) {
        console.log(err)
        res.sendStatus(500)
    }

})

module.exports = auth