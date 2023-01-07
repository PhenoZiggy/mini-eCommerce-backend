import express from "express";

const router = express.Router();

import {
  addProduct,
  getAllProducts,
  deleteProduct,
  singleProduct,
  updateProduct,
} from "../controllers/product";

router.post("/products", addProduct);
router.get("/products", getAllProducts);
router.get("/products/single", singleProduct);
router.delete("/products/", deleteProduct);
router.put("/products/", updateProduct);

module.exports = router;
