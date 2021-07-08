/**
 * Created by Pablo Silva
 * Date: 2021/06/27
 * Time: 18:46
 */
import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
