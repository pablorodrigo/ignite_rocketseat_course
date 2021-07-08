/**
 * Created by Pablo Silva
 * Date: 2021/05/23
 * Time: 15:20
 */
import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRouter } from "./users.route";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouter);
router.use(authenticateRoutes);

export { router };
