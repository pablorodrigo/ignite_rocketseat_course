/**
 * Created by Pablo Silva
 * Date: 2021/05/12
 * Time: 10:54
 */

import { Router } from "express";

import { ensureAuthenticated } from "../src/middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../src/modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
