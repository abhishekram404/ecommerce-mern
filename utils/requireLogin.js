const jwt = require("jsonwebtoken");
const requireLogin = async (req, res, next) => {
  try {
    const { jwt: token } = await req.cookies;
    console.log(token);
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken, typeof decodedToken);

    if (isEmptyObject(decodedToken)) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong while authorizing user.",
        details: error,
      });
    }

    req.authorizedUser = decodedToken;
    next();
    return;
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Something went wrong while authorizing user.",
      details: error,
    });
  }
};

module.exports = requireLogin;

const isEmptyObject = (obj) => Object.keys(obj).length === 0;
