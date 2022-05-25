import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { comparePassword, signToken } from "../helpers";
const prisma = new PrismaClient();

export const LoginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Logined User");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    } else {
      const user = await prisma.user.findFirst({
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        const verifyPassword = comparePassword(
          req.body.password,
          user.password
        );
        if (verifyPassword) {
          const accessToken: string = signToken({
            email: user.email,
            password: user.password,
            updatedAt: user.updatedAt.toDateString(),
            createdAt: user.createdAt.toDateString(),
            id: user.id,
          });
          if (accessToken) {
            res.status(200).json({
              accessToken: accessToken,
              statusCode: 200,
              message: "success",
            });
          } else {
            res.status(422).json({
              statusCode: 422,
              message: "fail",
            });
          }
        } else {
          res.status(422).json({
            statusCode: 422,
            message: `User password doesn't match`,
          });
        }
      } else {
        res.status(422).json({
          statusCode: 422,
          message: `User doesn't exist!`,
        });
      }
    }
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      prisma.$disconnect();
    }
    next(error);
  }
};

export const AuthenticatedUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error: any = new Error("Authenticated user");
      error.data = errors.array();
      error.statusCode = 422;
      throw error;
    } else {
      const user = req.user;
      if (user) {
        res.status(200).json({
          data: user,
          message: "success",
          statusCode: 200,
        });
      } else {
        res.status(401).json({
          statusCode: 401,
          message: `Authenticated User`,
        });
      }
    }
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      prisma.$disconnect();
    }
    next(error);
  }
};
