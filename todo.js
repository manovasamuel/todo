"user strict";

const todoEl = document.getElementById("todoValue");

const btn = document.querySelector(".addbtn");
const deletebtn = () => {
  const delbtn = document.querySelector(".deletebtn");
  delbtn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
};
const strikeout = () => {
  const checkbbox = document.getElementById("box");
  checkbbox.addEventListener("click", function (e) {
    e.target.nextElementSibling.classList.toggle("strike");
  });
};
const todo = function () {
  const tohtml = `
   <div>
      <input type="checkbox" id="box" />
      <label for="box" class="boxvalue">${todoEl.value}</label>
      }</label>
      <button class="deletebtn">-</button>
    </div>
  `;

  todoEl.value === ""
    ? alert("Please enter a task")
    : document.body.insertAdjacentHTML("afterend", tohtml);
  deletebtn();
  strikeout();
  todoEl.value = "";
};
btn.addEventListener("click", todo);
