/**
 * Created by Pablo Silva
 * Date: 2021/07/14
 * Time: 11:14
 */

import { container } from "tsyringe";

import { IDateProvider } from "@shared/container/provider/DateProvider/IDateProvider";
import { DayjsDateProvider } from "@shared/container/provider/DateProvider/implementations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
