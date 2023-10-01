const express = require("express");
const productRoute = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("product not found");
    }
  })
);

module.exports = productRoute;
