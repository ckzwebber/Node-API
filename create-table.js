import { sql } from "./db.js";

sql`
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
`.then(() => {
  console.log("Table created");
});
