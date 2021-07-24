/**
 * Created by Pablo Silva
 * Date: 2021/07/14
 * Time: 09:34
 */

interface ICreateRentalDTO {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
  id?: string;
  end_date?: Date;
  total?: number;
}

export { ICreateRentalDTO };
