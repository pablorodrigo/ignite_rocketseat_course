/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 14:24
 */
import { AppError } from "../../../shared/errors/AppError";
import { Category } from "../infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    throw new AppError("Method not implemented");
  }

  findByName(name: string): Category {
    return undefined;
  }

  listAll(): Category[] {
    return [];
  }
}

export { PostgresCategoriesRepository };
