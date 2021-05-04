/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 09:38
 */

import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/create", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/list/all", (request, response) => {
  const all = categoriesRepository.listAll();

  return response.json(all).send();
});

export { categoriesRoutes };
