/**
 * Created by
 * Date: 2021/07/13
 * Time: 12:43
 */

import dayjs from "dayjs";

import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "@modules/rentals/useCases/createRental/CreateRentalUseCase";
import { DayjsDateProvider } from "@shared/container/provider/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Rental", () => {
  const dayAdd24H = dayjs().add(1, "day").toDate();
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    dayjsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider,
      carsRepositoryInMemory
    );
  });

  it("should be able to create a new rental", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "name",
      description: "description",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      category_id: "1234",
      brand: "brand",
    });

    const rental = await createRentalUseCase.execute({
      user_id: "userId",
      car_id: car.id,
      expected_return_date: dayAdd24H,
    });

    // console.log(rental);

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if user already has one", async () => {
    const car1 = await carsRepositoryInMemory.create({
      name: "name1",
      description: "description1",
      daily_rate: 100,
      license_plate: "ABC-12341",
      fine_amount: 60,
      category_id: "12341",
      brand: "brand1",
    });

    const car2 = await carsRepositoryInMemory.create({
      name: "name2",
      description: "description2",
      daily_rate: 100,
      license_plate: "ABC-12342",
      fine_amount: 60,
      category_id: "12342",
      brand: "brand2",
    });

    await createRentalUseCase.execute({
      user_id: "userId",
      car_id: car1.id,
      expected_return_date: dayAdd24H,
    });

    await expect(
      createRentalUseCase.execute({
        user_id: "userId",
        car_id: car2.id,
        expected_return_date: dayAdd24H,
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if car is already rented", async () => {
    const car1 = await carsRepositoryInMemory.create({
      name: "name1",
      description: "description1",
      daily_rate: 100,
      license_plate: "ABC-12341",
      fine_amount: 60,
      category_id: "12341",
      brand: "brand1",
    });

    await expect(async () => {
      await createRentalUseCase.execute({
        user_id: "userId1",
        car_id: car1.id,
        expected_return_date: dayAdd24H,
      });

      await createRentalUseCase.execute({
        user_id: "userId2",
        car_id: car1.id,
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
