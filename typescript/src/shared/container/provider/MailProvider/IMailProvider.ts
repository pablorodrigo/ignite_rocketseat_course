/**
 * Created by Pablo Silva
 * Date: 2021/07/27
 * Time: 13:27
 */

interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variable: unknown,
    path: string
  ): Promise<void>;
}

export { IMailProvider };
