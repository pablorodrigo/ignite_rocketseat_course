/**
 * Created by Pablo Silva
 * Date: 2021/08/02
 * Time: 19:49
 */

interface IStorageProvider {
  save(file: string, folder: string): Promise<string>;
  delete(file: string, folder: string): Promise<void>;
}

export { IStorageProvider };
