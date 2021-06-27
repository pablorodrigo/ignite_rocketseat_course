/**
 * Created by Pablo Silva
 * Date: 2021/06/27
 * Time: 18:28
 */
interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
}

export { ICreateUserDTO };
