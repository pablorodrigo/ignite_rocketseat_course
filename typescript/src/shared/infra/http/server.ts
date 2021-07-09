import "reflect-metadata"; // to fix error Error: tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "../../container";
import { AppError } from "@shared/errors/AppError";

import swaggerFile from "../../../swagger.json";
import myCreateConnection from "../database/typeorm";
import { router } from "./routes";

myCreateConnection();
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running!"));
