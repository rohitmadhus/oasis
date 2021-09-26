import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRouter from "./routers/product-router.js";
import userRouter from "./routers/user-router.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/atlanta", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => console.log(e.message + "DB issue"));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

// This is the middleware to which expressAsyncHandler will get routed in case of error
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
