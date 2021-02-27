import mysql from "mysql";
import fs from "fs";

let sql_parameters = {
  username: Math.random().toString(16).substr(2, 14),
  password: Math.random().toString(16).substr(2, 14),
  database: Math.random().toString(16).substr(2, 14),
  host: "localhost",
};

const parameters_to_json = JSON.stringify(sql_parameters);
let condition = fs.existsSync("../../backend/constants/mysql.json");
console.log(condition);
if (condition == false) {
  fs.writeFile("mysql.json", parameters_to_json, (err, result) => {
    if (err) throw err;
  });
} else {
  let data = JSON.parse(fs.readFileSync("../../backend/constants/mysql.json"));
  sql_parameters = data;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//initiating mysql

let condition1 = false;
let condition2 = false;

const connection = mysql.createConnection({
  host: sql_parameters.host,
  user: "temp",
  password: "qwertyui",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else console.log("Database connected");
});

let sql = `select user from mysql.user where user = '${sql_parameters.username}';`;
connection.query(sql, (err, result) => {
  if (err) throw err;
  if (result[0] != null) {
    sql = `CREATE USER '${sql_parameters.username}'@'localhost' IDENTIFIED BY '${sql_parameters.password}';`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
    });

    sql = `GRANT ALL PRIVILEGES ON * . * TO '${sql_parameters.username}'@'localhost';`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
    });

    sql = `FLUSH PRIVILEGES;`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
    });
  }
});

sql = `SELECT schema_name FROM information_schema.schemata where schema_name = '${sql_parameters.database}';`;
connection.query(sql, (err, result) => {
  if (err) throw err;
  if (result[0] != null) {
    sql = `CREATE DATABASE ${sql_parameters.database};`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
    });
  }
});
