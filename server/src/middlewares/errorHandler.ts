import { NextFunction, Request, Response } from "express";

export const GlobalErrorHandler = (
  error: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ||500;
  const data = error.data;
  const message = error.message;
  res.status(statusCode).json({
    data,
    message,
  });
  next()
};