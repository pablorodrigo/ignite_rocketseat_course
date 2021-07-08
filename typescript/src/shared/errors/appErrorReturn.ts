import { NextFunction, Request, Response } from "express";

import { AppError } from "./AppError";

/**
 * Created by Pablo Silva
 * Date: 2021/07/06
 * Time: 10:33
 */

export function appErrorReturn(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
}
