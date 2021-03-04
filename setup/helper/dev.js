import mysql from "mysql";
import fs from "fs";

let data = JSON.parse(fs.readFileSync("../../backend/constants/mysql.json"));

const connection = mysql.createConnection({
  host: data.host,
  user: "temp",
  password: "qwertyui",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else console.log("Database connected");
});

let sql = `UPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='${data.username}';`;
connection.query(sql, (err, result) => {
  if (err) throw err;
});

setTimeout(function () {
  connection.end();
}, 500);
