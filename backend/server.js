const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const cookieParser = require("cookie-parser");
dotenv.config();
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect(
  // process.env.NODE_ENV === 'production'? "":
  process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce",
  (err) => {
    if (err) {
      console.log("❌ Error connecting to DB  ");
    }
    console.log("✅ Connected to DB  ");
  },
  {
    useNewUrlParser: true,
  }
);
// serve the build folder in  production environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", async (req, res) => {
    res.sendFile("index.html");
  });
}

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`🎧  Listening on port ${port}`);
});