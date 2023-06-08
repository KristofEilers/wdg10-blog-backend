require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const db = require("./db/index.js");

const app = express();
const port = process.env.PORT || 8080;

// db();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("*", (req, res) => res.sendStatus(404));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
