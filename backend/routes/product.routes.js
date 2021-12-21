const router = require("express").Router();
const productController = require("../controllers/productController");
const requireLogin = require("../utils/requireLogin");
router.get("/", productController.getAllProducts);
router.post("/create", requireLogin, productController.createProduct);

module.exports = router;
