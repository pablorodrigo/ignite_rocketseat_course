/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 13:07
 */
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExist = this.categoriesRepository.findByName(name);

    if (alreadyExist) {
      throw new Error("Name already exist");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
