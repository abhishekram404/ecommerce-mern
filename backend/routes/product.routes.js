const router = require("express").Router();
const productController = require("../controllers/productController");
router.get("/", productController.getAllProducts);
router.post("/create", productController.createProduct);

module.exports = router;
