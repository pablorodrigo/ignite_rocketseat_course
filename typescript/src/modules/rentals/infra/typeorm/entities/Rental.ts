import { v4 as uuidV4 } from "uuid";

/**
 * Created by Pablo Silva
 * Date: 2021/07/13
 * Time: 13:18
 */

class Rental {
  id: string;

  car_id: string;

  user_id: string;

  start_date: Date;

  end_date: Date;

  expected_return_date: Date;

  total: number;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Rental };
