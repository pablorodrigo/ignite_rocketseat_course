/**
 * Created by Pablo Silva
 * Date: 2021/07/27
 * Time: 16:24
 */

import { IMailProvider } from "@shared/container/provider/MailProvider/IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private message: unknown[] = [];

  async sendMail(
    to: string,
    subject: string,
    variable: unknown,
    path: string
  ): Promise<void> {
    this.message.push({
      to,
      subject,
      variable,
      path,
    });
  }
}

export { MailProviderInMemory };
