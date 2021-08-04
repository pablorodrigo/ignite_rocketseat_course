/**
 * Created by
 * Date: 2021/07/14
 * Time: 12:22
 */

import { hash } from "bcryptjs";
import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@shared/infra/http/app";

let connection: Connection;

describe("create category controller", () => {
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

  it("should able to create a new category", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@admin.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "categoria1",
        description: "description1",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(201);
  });

  it("should not able to create a new category wish same name", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@admin.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "categoria1",
        description: "description1",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(400);
  });

  it("should able to list all categories", async () => {
    await request(app).get("/cars/available").expect(200);
  });
});
