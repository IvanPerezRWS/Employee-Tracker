
const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    // Username
    user: "root",
    // Password
    password: "",
    database: "employees"
});

connection.connect();

// async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;