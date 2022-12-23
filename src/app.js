console.log(window.api);
import "../node_modules/iconify-icon/dist/iconify-icon.js";
import insertTodo from "./controllers/todo.js";
const todoInput = document.getElementById("addTodoInput");
const addTodo = document.getElementById("btnAdd");
const listTodoEl = document.getElementById("listTodo");

let datas = [];

const todoEl = (datas) => {
  let out;
  datas.map((data) => {
    out = `
    <li class="list-group-item shadow-sm rounded-2 d-flex justify-content-between align-items-center" data-id=${data.id} id="itemTodo">
      <h3 class="fs-6 mb-0" id="title">${data.title}</h3>
      <input class="form-control w-50 d-none" />
      <button type="button" class="btn btn-primary d-none">Update</button>
      <div class="icon-group">
        <iconify-icon
          icon="mdi:edit"
          class="fs-5"
          style="cursor: pointer"
          id="editBtn"
        ></iconify-icon>
        <iconify-icon
          icon="mdi:delete"
          class="fs-5 ms-2"
          style="cursor: pointer"
          id="deleteBtn"
        ></iconify-icon>
      </div>
    </li>
    `;
  });
  listTodoEl.innerHTML += out;
};

addTodo.addEventListener("click", () => {
  const value = todoInput.value;
  const random = Math.floor(Math.random() * 1000);
  const item = { title: value, edit: false };
  datas = [...datas, item];
  insertTodo(datas);
  console.log(datas, "add");
  todoEl(datas);
});

listTodoEl.addEventListener("click", (e) => {
  const target = e.target;
  const btnEdit = target.id === "editBtn";
  const btnDelete = target.id === "deleteBtn";

  if (btnEdit) {
    const itemTodoId = target.parentElement.parentElement.dataset.id;
    const title = target.parentElement.parentElement.children[0];
    const inputEdit = target.parentElement.parentElement.children[1];
    const btnUpdate = target.parentElement.parentElement.children[2];
    const iconGroup = target.parentElement.parentElement.children[3];

    iconGroup.classList.add("d-none");
    title.classList.add("d-none");
    inputEdit.classList.replace("d-none", "d-block");
    btnUpdate.classList.remove("d-none");

    inputEdit.value = title.textContent;

    btnUpdate.addEventListener("click", () => {
      datas.forEach((data) => {
        if (Number(itemTodoId) === data.id) {
          return { ...data, title: inputEdit.value };
        } else {
          return data;
        }
      });

      iconGroup.classList.replace("d-none", "d-block");
      title.classList.replace("d-none", "d-block");
      inputEdit.classList.replace("d-block", "d-none");
      btnUpdate.classList.add("d-none");
    });
  }

  if (btnDelete) {
    console.log(itemTodoId);
  }
});
