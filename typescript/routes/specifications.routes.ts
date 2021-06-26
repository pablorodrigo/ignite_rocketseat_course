/**
 * Created by Pablo Silva
 * Date: 2021/05/12
 * Time: 10:54
 */

import { Router } from "express";

import { CreateSpecificationController } from "../src/modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
