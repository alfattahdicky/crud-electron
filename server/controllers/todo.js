import { create, findAll } from "../models/todo.model.js";

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
      status: 400,
      message: err.message || "Failed get Data",
      data: null,
    });
  }
};

export const createTodo = async (req, res) => {
  try {
    const data = {
      todo: req.body?.todo,
    };
    if (!data.todo) throw new Error("Todo Cannot Empty");
    const modelCreateTodo = await create(data);

    console.log(modelCreateTodo);
    return res.status(200).send({
      status: 200,
      message: "Success Create Todo",
      data: data,
    });
  } catch (err) {
    return res.status(400).send({
      status: 400,
      message: err.message,
      data: null,
    });
  }
};
