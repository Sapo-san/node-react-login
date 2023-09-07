// .env vars
require('dotenv').config()

// Imports
const express = require('express')
const morgan = require('morgan')
var session = require('express-session')
var cors = require('express-cors')

const routes = require('./router');
const { connectToDb } = require('./database')
const sessionStore = require('./session_store')

async function main() {
    // App de express
    var app = express()

    // Middlewares & stuff
    app.use(morgan(process.env.MORGAN_CONFIG))
    app.use(express.json());

    // Sessions
    app.use(session({
        key: process.env.SESSION_KEY,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60,
            httpOnly: false
        },
        store: sessionStore
      }))
    
    // Routes
    app.use('/', routes)

    // CORS
    app.use(cors({
        allowedOrigins: process.env.ALLOWED_ORIGINS.split(' ')
    }))

    // Database connection via ORM
    const sequelize = await connectToDb()
    if (!sequelize) return // if connection fails, stop exec

    // Database sync
    await sequelize.sync()
    console.log("Database Synced correctly")

    // Server up
    app.listen(process.env.APP_PORT, () =>  {
        console.log(`App listening at port ${process.env.APP_PORT}`)
    })
}

// Entrypoint
main()




