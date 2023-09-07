// .env vars
require('dotenv').config()

const path = require('path')
const fs = require('fs')

// Imports
const { Sequelize } = require('sequelize');

// Connection to DB
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: process.env.DB_LOGS === 'true' ? console.log : false,
        force: process.env.DB_SYNC === 'true'
    }
);

const modelDefiners = [];

// read files from /models
fs.readdirSync(path.join(__dirname, '/models'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// call model definers with connection as arg to define the Models
modelDefiners.forEach(model => model(sequelize));

async function connectToDb() {
    /**
     * Attempts to connect to database
     */
    try {
        await sequelize.authenticate();
        console.log('Connection to DB has been established successfully.');
        return sequelize

    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return null
    }
}

module.exports = {
    connectToDb,
    ...sequelize.models
}