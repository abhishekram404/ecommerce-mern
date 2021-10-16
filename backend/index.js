const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());

app.get("*", async (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
