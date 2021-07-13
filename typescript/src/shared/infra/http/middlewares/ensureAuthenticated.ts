/**
 * Created by Pablo Silva
 * Date: 2021/07/06
 * Time: 09:55
 */
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }
  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "03a0675552249ae512247c1d03656742"
    ) as IPayload;

    // console.log(userId);

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User does not exist", 401);
    }

    request.user = {
      id: userId,
    };

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
