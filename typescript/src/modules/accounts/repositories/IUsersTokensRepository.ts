/**
 * Created by Pablo Silva
 * Date: 2021/07/25
 * Time: 14:14
 */
import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";

interface IUsersTokensRepository {
  create(data: ICreateUserTokenDTO): Promise<UserTokens>;
}

export { IUsersTokensRepository };
