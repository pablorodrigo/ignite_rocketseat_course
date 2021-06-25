/**
 * Created by Pablo Silva
 * Date: 2021/05/10
 * Time: 18:38
 */
import { Specification } from "../entities/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };