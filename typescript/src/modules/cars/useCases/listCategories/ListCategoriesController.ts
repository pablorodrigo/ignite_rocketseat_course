import { Request, Response } from "express";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

/**
 * Created by Pablo Silva
 * Date: 2021/05/19
 * Time: 22:40
 */
class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all).send();
  }
}

export { ListCategoriesController };
