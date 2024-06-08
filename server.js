import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";
import bcrypt from "bcrypt";

const server = fastify();

const db = new DatabasePostgres();

server.post("/user", async (request, reply) => {
  const { username, password } = request.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.create({
    username,
    password: hashedPassword,
  });

  return reply.status(201).send();
});

server.get("/user", async (request) => {
  const search = request.query.search;

  const users = await db.list(search);

  return users;
});

server.put("/user/:id", async (request, reply) => {
  const userId = request.params.id;
  const { username, password } = request.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.update(userId, {
    username,
    password: hashedPassword,
  });

  return reply.status(204).send();
});

server.delete("/user/:id", async (request, reply) => {
  const userId = request.params.id;

  await db.delete(userId);

  return reply.status(204).send();
});

server.listen({
  port: process.env.PORT ?? 3030,
});
