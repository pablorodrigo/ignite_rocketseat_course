/**
 * Created by
 * Date: 2021/07/08
 * Time: 10:06
 */
import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "@modules/cars/useCases/createCar/CreateCarUseCase";
import { AppError } from "@shared/errors/AppError";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("create a Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = {
      name: "name test",
      description: "description test",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "brand test",
      category_id: "category id test",
    };

    const carCreated = await createCarUseCase.execute(car);

    expect(carCreated).toHaveProperty("id");
  });

  it("should not be able do create a new car with same license plate", async () => {
    await expect(async () => {
      await createCarUseCase.execute({
        name: "name test1",
        description: "description test",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "brand test",
        category_id: "category id test",
      });

      await createCarUseCase.execute({
        name: "name test2",
        description: "description test",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "brand test",
        category_id: "category id test",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a new car with field Available set true by default", async () => {
    const car = {
      name: "name test",
      description: "description test",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "brand test",
      category_id: "category id test",
    };

    const carCreated = await createCarUseCase.execute(car);

    expect(carCreated.available).toBe(true);
  });
});
