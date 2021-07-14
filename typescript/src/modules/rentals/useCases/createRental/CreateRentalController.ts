/**
 * Created by Pablo Silva
 * Date: 2021/07/13
 * Time: 12:43
 */

import { Request, Response } from "express";
import { container } from "tsyringe";

class CreateRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}

export { CreateRentalController };
