/**
 * Created by Pablo Silva
 * Date: 2021/08/04
 * Time: 20:45
 */

import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProfileUserUseCase } from "@modules/accounts/useCases/profileUserUseCase/ProfileUserUseCase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const profileUserUseCase = container.resolve(ProfileUserUseCase);

    const user = await profileUserUseCase.execute(id);

    return response.json(user);
  }
}

export { ProfileUserController };
