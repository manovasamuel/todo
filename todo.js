"use strict";

const todoInput = document.querySelector(".input_val");
const unl = document.querySelector("ul");
const addTodo = document.querySelector(".addbtn");
const clearbtn = document.querySelector(".clear");
const resetbtn = document.querySelector(".reset");
const savebtn = document.querySelector(".save");

const showCustomAlert = (message) => {
  const customAlert = document.getElementById("customAlert");
  customAlert.textContent = message;
  customAlert.classList.add("show");

  // Hide the alert after 3 seconds
  setTimeout(() => {
    customAlert.classList.remove("show");
  }, 3000);
};

const createTodo = () => {
  const lis = document.createElement("li");
  const inp = document.createElement("input");
  let randomId = Math.floor(Math.random() * 1000);
  inp.id = randomId;
  inp.type = "checkbox";
  inp.className = "check";
  const label = document.createElement("label");
  label.htmlFor = randomId;
  label.textContent = todoInput.value;
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";

  lis.append(inp);
  lis.append(label);
  lis.append(delBtn);
  unl.append(lis);

  if (todoInput.value === "") {
    showCustomAlert("Please enter a task");
    lis.remove();
    return;
  }

  // functions

  const delToddo = (e) => {
    e.target.parentElement.remove();
  };
  const check_todo = () => {
    label.classList.toggle("checked");
  };

  // Event handlers
  delBtn.addEventListener("click", delToddo);

  inp.addEventListener("click", check_todo);

  todoInput.value = "";
};

const clearAllTodo = () => {
  unl.innerHTML = "";
};
clearbtn.addEventListener("click", clearAllTodo);
addTodo.addEventListener("click", createTodo);
