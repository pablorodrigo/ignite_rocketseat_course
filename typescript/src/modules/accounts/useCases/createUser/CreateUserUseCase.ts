/**
 * Created by Pablo Silva
 * Date: 2021/06/27
 * Time: 18:45
 */
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO) {
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });
  }
}
