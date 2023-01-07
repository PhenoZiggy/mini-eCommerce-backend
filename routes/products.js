import express from "express";

const router = express.Router();

import { addProduct, getAllProducts } from "../controllers/product";

router.post("/products", addProduct);
router.get("/products", getAllProducts);

module.exports = router;
