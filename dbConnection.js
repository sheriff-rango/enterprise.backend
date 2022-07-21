var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "sql6.freemysqlhosting.net", // Replace with your host name, host: 'localhost'
  user: "sql6507817", // Replace with your database username, user: "root"
  password: "mhVQKH4JAj", // Replace with your database password, password: ""
  database: "sql6507817", // Replace with your database Name, database: "my-node"
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});
module.exports = conn;
