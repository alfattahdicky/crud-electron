import { Router } from "express";
import { createTodo, getAllTodo } from "../controllers/todo.js";
const router = Router();

router.get("/", getAllTodo);
router.post("/", createTodo);

export default router;
