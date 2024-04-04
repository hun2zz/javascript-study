import { todos } from "./global_var.js";
function removeTodoData(dataId) {
  const index = todos.findIndex((todo) => todo.id === dataId);
  todos.splice(index, 1);
  console.log(todos);
}

export { removeTodoData };
