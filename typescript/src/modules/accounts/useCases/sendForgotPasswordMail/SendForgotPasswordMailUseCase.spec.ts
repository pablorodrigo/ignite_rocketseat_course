/**
 * Created by Pablo Silva
 * Date: 2021/07/27
 * Time: 16:17
 */

import { UsersRepositoryInMemory } from "@modules/accounts/repositories/inMemory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/inMemory/UsersTokensRepositoryInMemory";
import { SendForgotPasswordMailUseCase } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailUseCase";
import { DayjsDateProvider } from "@shared/container/provider/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/provider/MailProvider/InMemory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProvider: MailProviderInMemory;

describe("Send forgot email", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "driver_license",
      email: "email",
      name: "name",
      password: "password",
    });

    await sendForgotPasswordMailUseCase.execute("email");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("email")
    ).rejects.toEqual(new AppError("Users does not exist!"));
  });

  it("should be able to screate an users token", async () => {
    const generatedToken = jest.spyOn(usersTokensRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      driver_license: "driver_license",
      email: "email",
      name: "name",
      password: "password",
    });

    await sendForgotPasswordMailUseCase.execute("email");

    expect(generatedToken).toHaveBeenCalled();
  });
});
