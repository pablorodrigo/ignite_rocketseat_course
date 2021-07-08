import { v4 as uuidV4 } from "uuid";

/**
 * Created by Pablo Silva
 * Date: 2021/07/08
 * Time: 10:30
 */

class Car {
  id: string;
  name: string;
  description: string;
  daily_rate: number;
  available: boolean;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
      this.created_at = new Date();
    }
  }
}

export { Car };
