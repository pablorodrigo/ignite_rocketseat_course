/**
 * Created by Pablo Silva
 * Date: 2021/06/27
 * Time: 19:42
 */
import { Router } from "express";

import { CreateUserController } from "../src/modules/accounts/useCases/createUser/CreateUserController";

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);

export { usersRouter };
