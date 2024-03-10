const JWT = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers["authorization"] === undefined) {
    return res
      .status(400)
      .json({ message: "A token is required for authentication" });
  }

  const token =
    req.body.token ||
    req.query.token ||
    req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decodedToken.userId;
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 404;
    }
    return res.status(404).json({
      status: "Something Went Wrong !",
      statusCode: error.statusCode,
      message: error.message,
    });
  }

  return next();
};

module.exports = verifyToken;
