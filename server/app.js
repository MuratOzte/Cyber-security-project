const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("../server/routes/auth");
const testRoutes = require("../server/routes/test");

dotenv.config();

//Server Tools
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

const app = express();

const http = require("http").Server(app);
app.use(cors());
app.use(bodyParser.json());

//ERROR HANDLING
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.statusCode,
    err: err.message,
  });
});

app.use("/auth", authRoutes);
app.use("/test", testRoutes);

mongoose.connect(URI).then((result) => {
  http.listen(PORT), console.log(`Server Listening port ${PORT}`);
});
