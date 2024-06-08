import { randomUUID } from "node:crypto";

export class DataBaseMemory {
  #users = new Map();

  create(user) {
    const userId = randomUUID();

    this.#users.set(userId, user);
  }

  list(search) {
    return Array.from(this.#users.entries())
      .map((userArray) => {
        const id = userArray[0];
        const user = userArray[1];

        return {
          id,
          ...user,
        };
      })

      .filter((user) => {
        if (search) {
          return user.username.includes(search);
        } else {
          return true;
        }
      });
  }

  update(id, user) {
    this.#users.set(id, user);
  }

  delete(id) {
    this.#users.delete(id);
  }
}
