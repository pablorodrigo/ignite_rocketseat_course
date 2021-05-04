/**
 * Created by Pablo Silva
 * Date: 2021/05/04
 * Time: 10:42
 */

import { v4 as uuidV4 } from "uuid";

class Category {
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

export { Category };
