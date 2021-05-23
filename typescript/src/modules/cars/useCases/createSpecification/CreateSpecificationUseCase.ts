/**
 * Created by Pablo Silva
 * Date: 2021/05/06
 * Time: 23:25
 */
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExist) {
      throw new Error("Already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
