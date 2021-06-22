import { v4 as uuidV4 } from "uuid";

/**
 * Created by Pablo Silva
 * Date: 2021/05/06
 * Time: 23:19
 */
class Specification {
  id?: string;
  name: string;
  description: string;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification };
