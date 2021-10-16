const router = require("express").Router();
const userController = require("../controllers/userController");
router.get("/", (req, res) => {
  res.send("Hurrah! It is working 🙂 ");
});

router.post("/register", userController.register);

module.exports = router;
