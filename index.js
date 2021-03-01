import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import sequelize from "./backend/sql.js";
import sql_options from "./backend/constants/constants.js";

//========== INSTANTIATING THE EXPRESS APP ==========//
const app = express();

//========== MIDDLEWARE ==========//

//---------- cors ----------//
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//---------- json body parser ----------//
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//---------- connecting to sql database ----------//
try {
  await sequelize.sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//sending the HTML build

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send("Howdy");
});

//========== STARTING THE HTML SERVER ==========//

app.listen(sql_options.backend_port, () =>
  console.log(`Server Running on port ${sql_options.backend_port}`)
);
