/**
 * Created by Pablo Silva
 * Date: 2021/07/14
 * Time: 11:04
 */

import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalRoutes.get("/");

export { rentalRoutes };
