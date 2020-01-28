const mysql = require('mysql');
require('dotenv').config()

let connection;

if (true) {
    connection = mysql.createConnection('mysql://kgdc6lsepa8n0lwl:w0qdryqa81r6450q@tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qd6pbg7lvdc5z0ix')
} else {
    connection = mysql.createConnection({
        host: process.env.JAWSDB_HOST_4,
        user: process.env.JAWSDB_USER_4,
        password: process.env.JAWSDB_PASSWORD_4,
        database: process.env.JAWSDB_DATABASE_4,
        port: process.env.JAWSDB_PORT_4
    });
};

module.exports = connection;