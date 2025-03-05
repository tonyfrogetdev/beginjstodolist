const imageBtn = document.querySelectorAll(".background-selector-item");
const todoList = document.querySelector("#list");
const addToDoButton = document.querySelector(".add-todo");

const appState = {
  todos: [
    {
      id: 1,
      text: "Faire une douche 🚿",
      completed: false,
    },
    {
      id: 2,
      text: "Finir BeginWeb 🕸️",
      completed: false,
    },
  ],
};

const renderTodos = () => {
  if (!todoList) return;

  todoList.innerHTML = "";

  for (const todo of appState.todos) {
    const todoEl = createTodo(todo);
    todoList.appendChild(todoEl);
  }

  lucide.createIcons();
};

const createTodo = (todo) => {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo");
  if (todo.completed) {
    todoEl.classList.add("checked");
  }

  const checkbox = createCheckbox(todo);
  const text = createTextElement(todo);
  const trashButton = createDeleteButton(todo);
  todoEl.appendChild(checkbox);
  todoEl.appendChild(text);
  todoEl.appendChild(trashButton);
  return todoEl;
};

const createCheckbox = () => {
  const todoCheckbox = document.createElement("div");
  const todoCheckboxCircle = document.createElement("div");
  const todoCheckboxInput = document.createElement("input");
  todoCheckbox.classList.add("todo-checkbox");
  todoCheckboxCircle.classList.add("todo-checkbox-circle");
  todoCheckboxInput.type = "checkbox";

  todoCheckbox.appendChild(todoCheckboxCircle);
  todoCheckbox.appendChild(todoCheckboxInput);

  return todoCheckbox;
};

const createTextElement = (todo) => {
  const p = document.createElement("p");
  p.classList.add("todo-text");
  p.textContent = todo.text;
  return p;
};

const createDeleteButton = (todo) => {
  const buttonEl = document.createElement("button");
  const i = document.createElement("i");
  buttonEl.classList.add("todo-delete");
  i.setAttribute("data-lucide", "trash");
  buttonEl.appendChild(i);
  return buttonEl;
};
renderTodos();

imageBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const imageUrl = button.style.backgroundImage;
    document.body.style.backgroundImage = imageUrl;
  });
});

addToDoButton.addEventListener("click", (e) => {
  addToDo();
});

const addToDo = () => {
  const newId = Date.now();
  const newTodos = [
    ...appState.todos,
    {
      id: newId,
      text: "",
      completed: false,
    },
  ];

  appState.todos = newTodos;
  renderTodos();
};
