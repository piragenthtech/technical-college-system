const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>This is from node js server</h1>");
});

app.listen(8080);
