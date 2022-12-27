import {
  create,
  findAll,
  findById,
  removeById,
  updateById,
} from "../models/todo.model.js";

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

export const getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const modelGetTodo = await findById(id);
    if (modelGetTodo.length === 0) throw new Error("Id Todo is Not Found");

    return res.status(200).send({
      status: 200,
      message: `Success Get Data By Id ${id}`,
      data: modelGetTodo,
    });
  } catch (err) {
    return res.status(400).send({
      status: 400,
      message: err.message,
      data: null,
    });
  }
};

export const updateTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = {
      todo: req.body.todo,
      edit: req.body.edit,
    };

    const updateTodo = await updateById(id, data);
    if (updateTodo === 0) throw new Error(`Cannot update todo with ${id}`);
    if (data.todo === "") throw new Error("Todo Cannot Empty");

    return res.status(200).send({
      status: 200,
      message: "Success Update Todo",
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

export const deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodo = await removeById(id);
    if (deleteTodo === 0) throw new Error("Id not found");

    return res.status(200).send({
      status: 200,
      message: "Success Delete Todo",
      data: deleteTodo,
    });
  } catch (err) {
    return res.status(400).send({
      status: 400,
      message: err.message,
      data: null,
    });
  }
};
