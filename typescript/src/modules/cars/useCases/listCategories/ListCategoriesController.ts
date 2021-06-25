import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

/**
 * Created by Pablo Silva
 * Date: 2021/05/19
 * Time: 22:40
 */
class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoriesUseCase.execute();

    return response.json(all).send();
  }
}

export { ListCategoriesController };
