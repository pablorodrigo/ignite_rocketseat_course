import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

/**
 * Created by Pablo Silva
 * Date: 2021/05/31
 * Time: 18:31
 */
class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
