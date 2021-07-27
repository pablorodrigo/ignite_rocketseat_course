/**
 * Created by Pablo Silva
 * Date: 2021/07/26
 * Time: 13:01
 */

import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "@modules/accounts/useCases/refreshToken/RefreshTokenUseCase";

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token;

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    const refresh_token = await refreshTokenUseCase.execute(token);

    return response.json(refresh_token);
  }
}

export { RefreshTokenController };
