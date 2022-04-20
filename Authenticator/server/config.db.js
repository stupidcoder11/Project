const mysql = require("mysql2");

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

module.exports = con;
