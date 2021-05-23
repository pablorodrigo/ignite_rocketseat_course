/**
 * Created by Pablo Silva
 * Date: 2021/05/19
 * Time: 23:25
 */
import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.listAll();

    return categories;
  }
}

export { ListCategoriesUseCase };
