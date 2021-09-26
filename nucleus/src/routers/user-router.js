import express from "express";
import expressAsyncHandler from "express-async-handler";

import data from "../constants/data.js";
import User from "../models/user-model.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUser = await User.insertMany(data.users);
    res.send(createdUser);
  })
);

export default userRouter;
