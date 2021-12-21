const requireLogin = (req, res, next) => {
  try {
    console.log(req.cookie);
  } catch (error) {}
};

module.exports = requireLogin;
