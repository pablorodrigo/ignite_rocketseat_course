/**
 * Created by Pablo Silva
 * Date: 2021/07/06
 * Time: 10:18
 */

class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
