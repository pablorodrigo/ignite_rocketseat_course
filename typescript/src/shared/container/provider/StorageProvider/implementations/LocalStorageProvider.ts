/**
 * Created by Pablo Silva
 * Date: 2021/08/02
 * Time: 19:53
 */

import fs from "fs";
import { resolve } from "path";

import upload from "@config/upload";
import { IStorageProvider } from "@shared/container/provider/StorageProvider/IStorageProvider";

class LocalStorageProvider implements IStorageProvider {
  async delete(file: string, folder: string): Promise<void> {
    const fileName = resolve(`${upload.tmpFolder}/${folder}`, file);

    try {
      await fs.promises.stat(fileName);
    } catch {
      return;
    }

    await fs.promises.unlink(fileName);
  }

  async save(file: string, folder: string): Promise<string> {
    await fs.promises.rename(
      // take the file
      resolve(upload.tmpFolder, file),
      // send file
      resolve(`${upload.tmpFolder}/${folder}`, file)
    );

    return file;
  }
}

export { LocalStorageProvider };
