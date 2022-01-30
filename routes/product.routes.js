const router = require("express").Router();
const productController = require("../controllers/productController");
const requireLogin = require("../utils/requireLogin");
router.get("/", productController.getAllProducts);
router.get("/categories", productController.getAllCategories);
router.post("/create", requireLogin, productController.createProduct);
module.exports = router;
