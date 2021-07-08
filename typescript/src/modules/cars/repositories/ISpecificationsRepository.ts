/**
 * Created by Pablo Silva
 * Date: 2021/05/10
 * Time: 18:38
 */
import { Specification } from "@modules/cars/entities/Specification";
import { ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
