/**
 * Created by Pablo Silva
 * Date: 2021/07/06
 * Time: 11:01
 */
import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

const tmpFolder = resolve(__dirname, "..", "..", "tmp");

export default {
  tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
