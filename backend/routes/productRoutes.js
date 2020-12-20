import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public route
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    // res.status(401);
    // throw new Error("Not Authorised");
    res.json(products);
    // try catch method will need to do everytime so use a package (express-asymc-handler) instead
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public route
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      console.log(res.status); // optional
      throw new Error("Product not found");
    }
  })
);

export default router;
