import { Router } from "express";
import { body } from "express-validator";
import { AuthenticatedUser, LoginUser } from "../conrollers/user";
import { IsAuth } from "../middlewares/auth";

export const userRouter = Router();

userRouter.post(
  "/login",
  [body("email").notEmpty().isEmail(), body("password").notEmpty()],
  LoginUser
);

userRouter.get('/authenticated',IsAuth,AuthenticatedUser)
