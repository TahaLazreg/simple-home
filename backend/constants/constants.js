import fs from "fs";

//========== BACKEND SERVER PARAMETERS ==========//

const backend_port = 8000;

//========== SQL SERVER PARAMETERS ==========//

let data = JSON.parse(fs.readFile("./mysql.json"));

const sql_options = {
  // TODO: change this
  database: data.database,
  username: data.username,
  password: data.password,
  host: data.host,
  dialect: "mariadb",
};

export default { backend_port, sql_options };
