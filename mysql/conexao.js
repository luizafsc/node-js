var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "luizafsc",
  password: "aurora12"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
