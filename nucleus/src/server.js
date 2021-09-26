import express from "express";
import mongoose from "mongoose";

import data from "./constants/data.js";
import userRouter from "./routers/user-router.js";

mongoose
  .connect("mongodb://localhost/atlanta", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => console.log(e.message + "DB issue"));

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  console.log("get called");
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

// This is the middleware to which expressAsyncHandler will get routed in case of error
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
