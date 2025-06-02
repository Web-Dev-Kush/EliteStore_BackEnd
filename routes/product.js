const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/productController");

router.post("/", ctrl.createProduct);
router.get("/", ctrl.getAllProducts);
router.get("/:id", ctrl.getProductById);
router.put("/:id", ctrl.updateProduct);
router.delete("/:id", ctrl.deleteProduct);

module.exports = router;
