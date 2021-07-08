/**
 * Created by Pablo Silva
 * Date: 2021/07/08
 * Time: 10:25
 */
import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

class CarsRepository implements ICarsRepository {
  create(data: ICreateCarDTO): Promise<void> {
    return Promise.resolve(undefined);
  }

  findByLicensePlate(license_plate: string): Promise<Car> {
    return Promise.resolve(undefined);
  }
}

export { CarsRepository };
