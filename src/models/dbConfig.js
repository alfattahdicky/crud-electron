import knex from "knex";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "../db_crud.sqlite",
  },
  log: {
    error(message) {
      console.log(message);
    },
  },
});

export default db;
