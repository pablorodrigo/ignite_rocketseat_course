/**
 * Created by Pablo Silva
 * Date: 2021/05/23
 * Time: 15:20
 */
import { Router } from "express";

import { authenticateRoutes } from "@shared/infra/http/routes/authenticate.routes";
import { carsRoutes } from "@shared/infra/http/routes/cars.routes";
import { categoriesRoutes } from "@shared/infra/http/routes/categories.routes";
import { specificationsRoutes } from "@shared/infra/http/routes/specifications.routes";
import { usersRouter } from "@shared/infra/http/routes/users.route";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouter);
router.use("/cars", carsRoutes);
router.use(authenticateRoutes);

export { router };
