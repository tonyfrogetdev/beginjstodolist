const imageBtn = document.querySelectorAll(".background-selector-item");
const todoList = document.querySelector("#list");

imageBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const imageUrl = button.style.backgroundImage;
    document.body.style.backgroundImage = imageUrl;
  });
});

// on crée la todo maintenant

// fausse donnée en attendant

const fakeState = {
  todos: [
    {
      id: 1,
      text: "Lire un livre",
      completed: false,
    },
    {
      id: 2,
      text: "Todo BeginWeb",
      completed: false,
    },
  ],
};

const renderTodos = () => {
  if (!todoList) return;

  todoList.innerHTML = "";

  for (const todo of fakeState.todos) {
    createTodo(todo);
  }

  lucide.createIcons();
};

const createTodo = (todo) => {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo");

  // Ajoute la classe "checked" si la tâche est complétée
  if (todo.completed) {
    todoEl.classList.add("checked");
  }

  // Créer les éléments de la todo
  const checkboxEl = createCheckbox(todo);
  const { textEl, inputEl } = createEditableTextElement(todo);
  const deleteEl = createDeleteButton(todo);

  // Ajouter les éléments au todo
  todoEl.appendChild(checkboxEl);
  todoEl.appendChild(textEl);
  todoEl.appendChild(inputEl);
  todoEl.appendChild(deleteEl);

  // Ajouter la todo à la liste
  todoList.appendChild(todoEl); // Utilisation de todoList au lieu de listEl
};

renderTodos();
