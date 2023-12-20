require("dotenv").config();

const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Chai@Twiter.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>Plz login at promact.info </h1>");
});

//server running here
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${port}`);
});
