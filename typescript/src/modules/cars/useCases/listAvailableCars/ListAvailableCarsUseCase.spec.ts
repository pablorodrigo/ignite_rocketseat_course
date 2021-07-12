/**
 * Created by
 * Date: 2021/07/09
 * Time: 11:32
 */

import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "@modules/cars/useCases/createCar/CreateCarUseCase";
import { ListAvailableCarsUseCase } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsUseCase";

let createCarUseCase: CreateCarUseCase;

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await createCarUseCase.execute({
      name: "car",
      description: "description car",
      daily_rate: 100,
      license_plate: "ABC-1234 car",
      fine_amount: 60,
      brand: "brand test car",
      category_id: "category id car",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await createCarUseCase.execute({
      name: "car",
      description: "description car",
      daily_rate: 100,
      license_plate: "ABC-1234 car",
      fine_amount: 60,
      brand: "brand test car2",
      category_id: "category id car",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "car",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await createCarUseCase.execute({
      name: "car",
      description: "description car",
      daily_rate: 100,
      license_plate: "ABC-1234 car",
      fine_amount: 60,
      brand: "brand test car",
      category_id: "category id car",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "brand test car",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await createCarUseCase.execute({
      name: "car",
      description: "description car",
      daily_rate: 100,
      license_plate: "ABC-1234 car",
      fine_amount: 60,
      brand: "brand test car",
      category_id: "category id car",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category id car",
    });

    expect(cars).toEqual([car]);
  });
});
