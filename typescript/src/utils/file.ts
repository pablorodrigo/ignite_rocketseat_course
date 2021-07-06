/**
 * Created by Pablo Silva
 * Date: 2021/07/06
 * Time: 11:38
 */

import fs from "fs";

export const deleteFile = async (fileName: string) => {
  try {
    await fs.promises.stat(fileName);
  } catch {
    return;
  }

  await fs.promises.unlink(fileName);
};
