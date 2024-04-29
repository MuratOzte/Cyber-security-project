const express = require("express");
const { login, register } = require("../controllers/auth");
const verifyToken = require("../middlewares/isAuth");
const { nmapTest } = require("../controllers/test");
const router = express.Router();

router.post("/nmap", verifyToken, nmapTest);

module.exports = router;
