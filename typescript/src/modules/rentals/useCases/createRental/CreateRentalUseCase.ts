/**
 * Created by Pablo Silva
 * Date: 2021/07/13
 * Time: 12:43
 */

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/provider/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(
    private rentalsRepository: IRentalsRepository,
    private dateProvider: IDateProvider
  ) {}

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<Rental> {
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError("Car unavailable");
    }

    const rentalOpenedToUser =
      await this.rentalsRepository.findOpenRentalByUser(user_id);

    if (rentalOpenedToUser) {
      throw new AppError("There is a rental in progress for this user");
    }

    // rental should be have 24h as minimum duration
    const compare = this.dateProvider.compareInHours(
      this.dateProvider.dateNow(),
      expected_return_date
    );

    // console.log("compare date", compare);

    if (compare < 24) {
      throw new AppError("Invalid return time");
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}

export { CreateRentalUseCase };
