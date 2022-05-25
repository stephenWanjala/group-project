const mysql = require('mysql');
// connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.databaseHost,
    user: process.env.databaseUser,
    password: process.env.databasePassword
})

