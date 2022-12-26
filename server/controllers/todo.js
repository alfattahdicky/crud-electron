import { findAll } from "../models/todo.model.js";

export const getAllTodo = async (req, res) => {
  try {
    const getData = await findAll();
    if (getData.length === 0) throw new Error("Your Data is Empty");

    return res.status(200).send({
      status: 200,
      data: getData,
      message: "Success Get All Data Todos",
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message || "Failed get Data",
      data: null,
    });
  }
};
