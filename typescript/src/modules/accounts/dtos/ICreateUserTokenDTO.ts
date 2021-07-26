/**
 * Created by Pablo Silva
 * Date: 2021/07/25
 * Time: 14:24
 */

interface ICreateUserTokenDTO {
  user_id: string;
  expires_date: Date;
  refresh_token: string;
}

export { ICreateUserTokenDTO };
