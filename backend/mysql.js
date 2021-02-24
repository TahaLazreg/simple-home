const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",      //TODO: Change this
    password: "",       //TODO: Change this
    database: "",       //TODO: Change this
    multipleStatements: true,
    //TODO THIS IS TO CHANGE FOR YOUR MYSQL DATABASE
  });
  
  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else console.log("Database connected");
  });