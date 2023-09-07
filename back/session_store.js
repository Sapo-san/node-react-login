// .env vars
require('dotenv').config()

// Imports
var session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);

// Datos conexión a DB
const options = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
};

// Store de MySQL
const mysql_store_options = {
	createDatabaseTable: true,
	schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
}

const sessionStore = new MySQLStore({...options, ...mysql_store_options});

module.exports = sessionStore