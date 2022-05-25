import { Router } from "express";
import { body } from "express-validator";
import { SignInUser } from "../controllers/userController";

export const UserRoute = Router();

UserRoute.post(
  "/login",
  [body("email").notEmpty().isEmail(), body("password").notEmpty()],
  SignInUser
);
