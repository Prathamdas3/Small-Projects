"use strict";
const saveTodo = document.querySelector(".submitTodo");
const cardList = document.querySelector(".cards");
const deleteBtn = document.querySelector(".deleteBtn");
const indiCard = document.getElementById("indiCard");

let counter = 0;
let lastCounter = counter - 1;

deleteTodo.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem(counter - 1);
  if (indiCard === null) {
  }
});

saveTodo.addEventListener("click", (e) => {
  let todoTitle = title.value;
  let todoDescription = desc.value;

  e.preventDefault();
  if (todoTitle.length != 0) {
    localStorage.setItem(counter, JSON.stringify([todoTitle, todoDescription]));
    cardList.appendChild(
      document.createElement("div")
    ).innerHTML = `<div class="card" style="width: 18rem" id="indicard">
    <div class="card-body">
      <h5 class="card-title">${todoTitle}</h5>
      <p class="card-text">
        ${todoDescription}
      </p>
      </div>
    </div>
  </div> `;

    alertSection.innerHTML = `<div class="alert alert-success alert-dismissible fade show container" role="alert">
      Successfully created a new todo : ${todoTitle}
    </div>`;
    setTimeout(() => {
      alertSection.innerHTML = "";
    }, 2000);
    title.value = ``;
    desc.value = ``;
    counter++;
  }
});
