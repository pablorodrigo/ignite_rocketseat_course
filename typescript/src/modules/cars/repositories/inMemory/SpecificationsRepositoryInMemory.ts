/**
 * Created by Pablo Silva
 * Date: 2021/07/12
 * Time: 11:17
 */
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((specification) => {
      return ids.includes(specification.id);
    });

    return allSpecifications;
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}

export { SpecificationsRepositoryInMemory };
