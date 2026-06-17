// Starting tasks array
let tasks;

// Show all tasks on the page
function printTasks() {
  // Clearing the list
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = "";

  // Create list item for each task
  tasks.forEach((task) => {
    const div = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const p = document.createElement("p");
    const li = document.createElement("li");

    // Insert to the div and the list item
    div.appendChild(p);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    div.style.display = "flex";
    li.appendChild(div);
    tasksList.appendChild(li);

    // Handle buttons
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";
    p.innerText = task.task;

    // adding event listeners to buttons
    deleteBtn.addEventListener("click", () => deleteTask(task.id));
    editBtn.addEventListener("click", () => editTask(task));
  });
}

// Add new task item
function addNewTask(taskText) {
  taskText === ""
    ? alert("Empty input")
    : tasks.push({
        id: crypto.randomUUID(),
        task: taskText,
      });
  saveTasksInLocalStorage();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasksInLocalStorage();
  printTasks();
}

// Edit task
function editTask({ id, task }) {
  const input = document.getElementById("taskInput");
  input.value = task;
  deleteTask(id);
  saveTasksInLocalStorage();
}

// Handle "Add" button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  addNewTask(input.value);
  input.value = "";
  printTasks();
});

// save tasks to local storage
function saveTasksInLocalStorage() {
  localStorage.setItem("storedTasks", JSON.stringify(tasks));
}

// Get tasks from local storage
function restoreTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("storedTasks");
  tasks = JSON.parse(storedTasks) || [];
}
restoreTasksFromLocalStorage();

// Print all tasks when page loaded
printTasks();
