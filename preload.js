const { contextBridge } = require("electron");
const { getAllTodo, insertTodo } = require("./src/controllers/todo.js");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("api", {
  getAllTodos: getAllTodo,
  insertTodo: insertTodo,
});
