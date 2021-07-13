/**
 * Created by
 * Date: 2021/07/12
 * Time: 10:27
 */
import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/inMemory/SpecificationsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationUseCase";
import { AppError } from "@shared/errors/AppError";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("create car specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it("should be able to add a nre specification for a car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "name test",
      description: "description test",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "brand test",
      category_id: "category id test",
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: "description of specification",
      name: "name of spec",
    });

    const specifications_id = [specification.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });

  it("should not be able to add a new specification for a unregistered car", async () => {
    await expect(async () => {
      const car_id = "1234";
      const specifications_id = ["24563"];
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
