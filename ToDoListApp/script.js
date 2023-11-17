const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskBtn = document.querySelector(".addTask");

function addTaskToList() {
  if (inputBox.value === "") {
    alert("Write a task");
  } else {
    createNewTask();
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function createNewTask() {
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

loadData();
addTaskBtn.addEventListener("click", addTaskToList);
