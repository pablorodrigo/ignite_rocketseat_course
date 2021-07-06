/**
 * Created by Pablo Silva
 * Date: 2021/07/06
 * Time: 10:55
 */

declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
    };
  }
}
