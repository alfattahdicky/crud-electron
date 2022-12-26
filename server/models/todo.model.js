import db from "../config/db.js";

db.schema.hasTable("items").then(function (exists) {
  if (!exists) {
    return db.schema.createTable("items", function (t) {
      t.increments("id").primary();
      t.string("todo", 100);
      t.boolean("edit").defaultTo(false);
    });
  } 
});

const findAll = async () => {
  try {
    const result = await db.select("*").from("items");
    return result;
  } catch (err) {
    return err.message;
  }
};

console.log(findAll().then((value) => console.log(value)));
export { findAll };
