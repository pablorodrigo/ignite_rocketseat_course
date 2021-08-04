/**
 * Created by Pablo Silva
 * Date: 2021/08/02
 * Time: 20:21
 */

import { S3 } from "aws-sdk";
import fs from "fs";
import mime from "mime";
import { resolve } from "path";

import upload from "@config/upload";
import { IStorageProvider } from "@shared/container/provider/StorageProvider/IStorageProvider";

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION_NAME,
    });
  }

  async delete(file: string, folder: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: `${process.env.AWS_BUCKET_ID}/${folder}`,
        Key: file,
      })
      .promise();
  }

  async save(file: string, folder: string): Promise<string> {
    const originalName = resolve(upload.tmpFolder, file);

    const fileContent = await fs.promises.readFile(originalName);

    const ContentType = mime.getType(originalName);

    await this.client
      .putObject({
        Bucket: `${process.env.AWS_BUCKET_ID}/${folder}`,
        Key: file,
        ACL: "public-read",
        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalName);

    return file;
  }
}

export { S3StorageProvider };
