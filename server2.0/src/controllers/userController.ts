import { NextFunction, Request, Response } from "express";
// import { validationResult } from "express-validator";
// import { CreateError } from "../helpers/errors";
// // import { prisma } from "../lib/prisma";
// import { comparedPassword } from "../helpers/index";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export const SignInUser = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    ("hello");
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   CreateError(422, "Logged In User!", errors.array());
    // } else {
    //   const user = await prisma.user.findFirst({
    //     where: {
    //       email: req.body.email,
    //     },
    //   });
    //   if (!user) return next(CreateError(404, "User Not Found"));

    //   const isPasswordCorrect = comparedPassword(
    //     req.body.password,
    //     user.password
    //   );

    //   if (!isPasswordCorrect)
    //     return next(CreateError(404, "Wrong User Name Or Password."));
    // }
  } catch (error) {
    next(error);
  }
};
