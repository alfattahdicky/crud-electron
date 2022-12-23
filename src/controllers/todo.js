import db from "../models/dbConfig.js";

const insertTodo = (datas) => {
  return db("items").insert(datas);
};

export default insertTodo;
