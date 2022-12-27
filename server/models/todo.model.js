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

const create = async (data) => {
  try {
    const query = await db("items").insert(data);
    return query;
  } catch (err) {
    return err.message;
  }
};

const findById = async (id) => {
  try {
    const query = await db.select("*").from("items").where("id", "=", id);
    return query;
  } catch (err) {
    return err.message;
  }
};

const updateById = async (id, data) => {
  try {
    const query = await db("items").where("id", "=", id).update(data);
    return query;
  } catch (err) {
    return err.message;
  }
};

const removeById = async (id) => {
  try {
    const query = await db("items").where("id", "=", id).del(["todo"]);
    return query;
  } catch (err) {
    return err.message;
  }
};

export { findAll, create, findById, updateById, removeById };
