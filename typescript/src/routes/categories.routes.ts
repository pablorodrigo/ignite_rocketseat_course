/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 09:38
 */

import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/create", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/list/all", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
