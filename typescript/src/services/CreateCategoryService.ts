/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 13:07
 */
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExist = this.categoriesRepository.findByName(name);

    if (alreadyExist) {
      throw new Error("Name already exist");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
