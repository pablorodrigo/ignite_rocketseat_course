/**
 * Created by
 * Date: 2021/07/13
 * Time: 12:43
 */

import dayjs from "dayjs";

import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "@modules/rentals/useCases/createRental/CreateRentalUseCase";
import { DayjsDateProvider } from "@shared/container/provider/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe("Create Rental", () => {
  const dayAdd24H = dayjs().add(1, "day").toDate();
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider
    );
  });

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "userId",
      car_id: "car_id",
      expected_return_date: dayAdd24H,
    });

    console.log(rental);

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if user already has one", async () => {
    await expect(async () => {
      await createRentalUseCase.execute({
        user_id: "userId",
        car_id: "car_id1",
        expected_return_date: dayAdd24H,
      });

      await createRentalUseCase.execute({
        user_id: "userId",
        car_id: "car_id2",
        expected_return_date: dayAdd24H,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if car is already rented", async () => {
    await expect(async () => {
      await createRentalUseCase.execute({
        user_id: "userId1",
        car_id: "car_id",
        expected_return_date: dayAdd24H,
      });

      await createRentalUseCase.execute({
        user_id: "userId2",
        car_id: "car_id",
        expected_return_date: dayAdd24H,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental with invalid return time", async () => {
    await expect(async () => {
      await createRentalUseCase.execute({
        user_id: "userId1",
        car_id: "car_id",
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
