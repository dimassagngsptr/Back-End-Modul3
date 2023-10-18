const mysql = require("mysql2");
const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "@Dimas123_",
   database: "JCWD0208",
});

module.exports = db
