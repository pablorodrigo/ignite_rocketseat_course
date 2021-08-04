/**
 * Created by Pablo Silva
 * Date: 2021/07/14
 * Time: 11:14
 */

import { container } from "tsyringe";

import { IDateProvider } from "@shared/container/provider/DateProvider/IDateProvider";
import { DayjsDateProvider } from "@shared/container/provider/DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "@shared/container/provider/MailProvider/IMailProvider";
import { EtherealMainProvider } from "@shared/container/provider/MailProvider/implementations/EtherealMainProvider";
import { LocalStorageProvider } from "@shared/container/provider/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "@shared/container/provider/StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "@shared/container/provider/StorageProvider/IStorageProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

container.registerInstance<IMailProvider>(
  "EtherealMainProvider",
  new EtherealMainProvider()
);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.disk]
);
