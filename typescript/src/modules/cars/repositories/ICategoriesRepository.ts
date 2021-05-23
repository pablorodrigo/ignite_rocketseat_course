/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 14:22
 */
import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  listAll(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
