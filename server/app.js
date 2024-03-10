const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//Server Tools
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

const app = express();

const http = require("http").Server(app);

mongoose.connect(URI).then((result) => {
  http.listen(PORT), console.log(`Server Listening port ${PORT}`);
});
