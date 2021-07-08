/**
 * Created by Pablo Silva
 * Date: 2021/05/19
 * Time: 23:25
 */
import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.listAll();

    return categories;
  }
}

export { ListCategoriesUseCase };
