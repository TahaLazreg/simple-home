const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

//the express app
const app = express();

//cors
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//json body parser
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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//sending the HTML build

app.get("/", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    res.send("Howdy");
  });

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//starting server

const PORT = 80;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));