import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";

/**
 * Created by Pablo Silva
 * Date: 2021/05/23
 * Time: 15:07
 */
class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(CreateCategoryUseCase);
    createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
