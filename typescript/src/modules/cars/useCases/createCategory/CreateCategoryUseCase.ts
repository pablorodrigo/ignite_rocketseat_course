/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 13:07
 */
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const alreadyExist = await this.categoriesRepository.findByName(name);

    if (alreadyExist) {
      throw new Error("Name already exist");
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
