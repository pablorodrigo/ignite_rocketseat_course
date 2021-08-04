/**
 * Created by
 * Date: 2021/07/14
 * Time: 16:31
 */

import { hash } from "bcryptjs";
import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@shared/infra/http/app";

let connection: Connection;

describe("list of categories", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
    const id = uuidV4();

    const password = await hash("admin", 8);
    await connection.query(`INSERT INTO users(id, name, email, password, "isAdmin", created_at, driver_license)
     values ('${id}','admin', 'admin@admin.com.br','${password}',true, 'now()', 'XXXXXXXX')`);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to list all categories", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@admin.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({
        name: "categoria1",
        description: "description1",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const response = await request(app).get("/categories");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
  });
});
