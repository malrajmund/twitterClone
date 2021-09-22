const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", require("./routes/api/user"));

app.get("/", (req, res) => {
  res.send("Twitter clone");
});

app.listen(5000, () => {
  console.log("App nasłuchuje na porcie 5000.");
});
