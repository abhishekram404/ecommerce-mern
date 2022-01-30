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

const isProduction = process.env.NODE_ENV === "production";

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    isProduction
      ? "https://abhishekram404-shopy.herokuapp.com"
      : "http://localhost:3000"
  );
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(
  cors({
    credentials: true,
    origin: isProduction
      ? "https://abhishekram404-blog.herokuapp.com"
      : "http://localhost:3000",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce",
  (err) => {
    if (err) {
      console.log(err);
      console.log("❌ Error connecting to DB  ");
    }
    console.log("✅ Connected to DB  ");
  },
  {
    useNewUrlParser: true,
  }
);
if (isProduction) {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));
  app.get("*", async (req, res) => {
    await res.sendFile("index.html");
  });
}

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`🎧  Listening on port ${port}`);
});
