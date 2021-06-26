/**
 * Created by Pablo Silva
 * Date: 2021/05/06
 * Time: 23:28
 */
import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import { ICreateCategoryDTO } from "../ICategoriesRepository";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    console.log(specification);
    /* Object.assign(specification, {
      name,
      description,
      create_at: new Date(),
    }); */

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}

export { SpecificationsRepository };
