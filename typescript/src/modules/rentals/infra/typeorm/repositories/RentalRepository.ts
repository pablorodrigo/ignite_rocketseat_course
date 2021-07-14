/**
 * Created by Pablo Silva
 * Date: 2021/07/13
 * Time: 13:24
 */
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

class RentalRepository implements IRentalsRepository {
  async create(): Promise<Rental> {
    return Promise.resolve(undefined);
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return Promise.resolve(undefined);
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return Promise.resolve(undefined);
  }
}

export { RentalRepository };
