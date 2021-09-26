import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../constants/data.js";
import Product from "../models/product-model.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

// productRouter.get(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     // Remove all users
//     await User.remove({});
//     const craetedProducts = await Product.insertMany(data.products);
//     res.send({ craetedProducts });
//   })
// );

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  })
);

export default productRouter;
