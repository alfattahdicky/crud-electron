import { Router } from "express";
import {
  createTodo,
  deleteTodoById,
  getAllTodo,
  getTodoById,
  updateTodoById,
} from "../controllers/todo.controller.js";
const router = Router();

router.get("/", getAllTodo);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.put("/:id", updateTodoById);
router.delete("/:id", deleteTodoById);

export default router;
