/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 09:38
 */

import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../src/modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../src/modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../src/modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
