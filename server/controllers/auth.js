const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res, next) => {
  const { email, password, comparePassword } = req.body;

  if (comparePassword !== password) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const emailExists = await Users.findOne({ email: email });

  if (emailExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new Users({
    email: email,
    password: hashedPassword,
  });

  try {
    await user.save();
    return res
      .status(201)
      .json({ message: "User created successfully", user: user });
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 404;
    }
    return res.status(404).json({
      status: "Something Went Wrong !",
      statusCode: error.statusCode,
      message: "Invalid value !",
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ message: "Email does not exist" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json({ message: "Password is incorrect" });
  }

  //JWT TOKEN
  const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  try {
    return res.status(200).json({
      message: "User logged in successfully",
      token: token,
      userId: user._id.toString(),
    });
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 404;
    }
    return res.status(404).json({
      status: "Something Went Wrong !",
      statusCode: error.statusCode,
      message: "Invalid value !",
    });
  }
};
