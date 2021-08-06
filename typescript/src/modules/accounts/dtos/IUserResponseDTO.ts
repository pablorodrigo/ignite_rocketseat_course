/**
 * Created by Pablo Silva
 * Date: 2021/08/05
 * Time: 13:35
 */

interface IUserResponseDTO {
  email: string;
  name: string;
  id: string;
  avatar: string;
  driver_license: string;
  avatar_url(): string;
}

export { IUserResponseDTO };
