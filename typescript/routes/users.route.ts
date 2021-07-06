/**
 * Created by Pablo Silva
 * Date: 2021/06/27
 * Time: 19:42
 */
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../src/config/upload";
import { ensureAuthenticated } from "../src/middlewares/ensureAuthenticated";
import { CreateUserController } from "../src/modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../src/modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post("/", createUserController.handle);

usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRouter };
