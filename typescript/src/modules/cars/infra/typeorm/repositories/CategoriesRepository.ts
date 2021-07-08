/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 10:58
 */
import { getRepository, Repository } from "typeorm";

import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "@modules/cars/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  /* private static INSTANCE: CategoriesRepository; */

  constructor() {
    this.repository = getRepository(Category);
  }

  /* public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  } */

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    console.log(category);

    await this.repository.save(category);
  }

  async listAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // SELECT * FROM categories where name = 'name' limit 1
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
