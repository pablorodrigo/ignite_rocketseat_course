/**
 * Created by Pablo Silva
 * Date: 2021/07/13
 * Time: 13:07
 */ import { ICreateRentalDTO } from "@modules/rentals/dto/ICreateRentalDTO";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

interface IRentalsRepository {
  create(data: ICreateRentalDTO): Promise<Rental>;
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
