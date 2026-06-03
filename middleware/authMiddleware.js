const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "No token, access denied" });
    }

    const verified = jwt.verify(token, "secretkey");

    req.doctor = verified; // store doctor info

    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;