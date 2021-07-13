/**
 * Created by Pablo Silva
 * Date: 2021/07/13
 * Time: 09:53
 */

import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImagesUseCase } from "@modules/cars/useCases/uploadCarImage/UploadCarImagesUseCase";

interface IFiles {
  filename: string;
}
class UploadCarImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as unknown as IFiles[];

    // console.log(images);

    const uploadCarImageUseCase = container.resolve(UploadCarImagesUseCase);

    const images_name = images.map((file) => file.filename);

    await uploadCarImageUseCase.execute({ car_id: id, images_name });

    return response.status(201).send();
  }
}

export { UploadCarImagesController };
