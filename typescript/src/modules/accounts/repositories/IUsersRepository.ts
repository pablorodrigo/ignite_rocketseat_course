/**
 * Created by Pablo Silva
 * Date: 2021/06/27
 * Time: 18:19
 */
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
