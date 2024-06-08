import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  #users = new Map();

  async list(search) {
    let users;

    if (search) {
      users = await sql`SELECT * FROM users WHERE username ILIKE ${
        "%" + search + "%"
      }`;
    } else {
      users = await sql`SELECT * FROM users`;
    }

    return users;
  }

  async create(user) {
    const userId = randomUUID();

    const { username, password } = user;

    await sql`INSERT INTO users (id, username, password) VALUES (${userId}, ${username}, ${password})`;
  }

  async update(id, user) {
    const { username, password } = user;

    await sql`UPDATE users SET username = ${username}, password = ${password} WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`DELETE FROM users WHERE id = ${id}`;
  }
}
