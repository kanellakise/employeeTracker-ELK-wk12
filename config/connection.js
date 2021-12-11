const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '2xu^#8F#kbE2',
    database: 'business',
    multipleStatements: true
});

module.exports = db;