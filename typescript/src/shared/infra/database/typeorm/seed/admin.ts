/**
 * Created by Pablo Silva
 * Date: 2021/07/09
 * Time: 09:45
 */
import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import myCreateConnection from "../index";

async function create() {
  const connection = await myCreateConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO users(id, name, email, password, "isAdmin", created_at, driver_license)
     values ('${id}','admin', 'admin@admin.com.br','${password}',true, 'now()', 'XXXXXXXX')
    `
  );

  await connection.close();
}

create().then(() => console.log("User admin created"));
