/**
 * Created by Pablo Silva
 * Date: 2021/05/10
 * Time: 18:38
 */
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
