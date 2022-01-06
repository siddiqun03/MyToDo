// Nmadurla
let elinputTitle = document.querySelector(".firstInp");
let eladdTitle = document.querySelector(".addTitel");
let eltoDoTitle = document.querySelector(".toDoTitle");
let eltoDoItem = document.querySelector(".toDoItm");
let elbtnAddDesc = document.querySelector("#bi");
let eltoDoDesc = document.querySelector(".toDoDesc");
let eltodoInput = document.querySelector(".todoInput");
let elToDoList = document.querySelector(".toDoList");

// yana usha gap nmadurlaa !
eladdTitle.addEventListener("click", (evt) => {
  evt.preventDefault();
  let trim = elinputTitle.value;
  trim.trim();
  if (
    elinputTitle.value == String() ||
    elinputTitle.value == Object() ||
    elinputTitle.value == " " ||
    elinputTitle.value == "  " ||
    elinputTitle.value == "   " ||
    elinputTitle.value == "    " ||
    elinputTitle.value == "     " ||
    elinputTitle.value == "      " ||
    elinputTitle.value == "       " ||
    elinputTitle.value == "        " ||
    elinputTitle.value == "         " ||
    elinputTitle.value == "          " ||
    elinputTitle.value == "           "
  ) {
  } else {
    let title = elinputTitle.value;
    list(title);
    elinputTitle.value = null;
  }
});
function list(title1) {
  let newItem = document.createElement("li");
  newItem.classList.add("toDoItm");
  elToDoList.appendChild(newItem);

  let newtitle = document.createElement("p");
  newtitle.classList.add("toDoTitle");
  newtitle.textContent = title1;
  newItem.appendChild(newtitle);

  let description = document.createElement("div");
  newItem.appendChild(description);

  let newDiv = document.createElement("div");
  newDiv.classList.add("position");
  newItem.appendChild(newDiv);

  let newInput = document.createElement("input");
  newInput.classList.add("toDoInput");
  newInput.setAttribute("placeholder", "Entere your To Do...");
  newInput.setAttribute("type", "text");
  newInput.required = true;
  newDiv.appendChild(newInput);

  let btn = document.createElement("button");
  btn.setAttribute("class", "bi");
  btn.classList.add("bi-arrow-right");
  btn.setAttribute("id", "bi");
  newDiv.appendChild(btn);

  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (
      newInput.value == String() ||
      newInput.value == Object() ||
      newInput.value == " " ||
      newInput.value == "  " ||
      newInput.value == "   " ||
      newInput.value == "    " ||
      newInput.value == "     " ||
      newInput.value == "      " ||
      newInput.value == "       " ||
      newInput.value == "        " ||
      newInput.value == "         " ||
      newInput.value == "          " ||
      newInput.value == "           "
    ) {
    } else {
      let desc = newInput.value;
      let p = document.createElement("p");
      p.innerHTML = desc;
      description.appendChild(p);
      p.classList.add("toDoDesc");
      newInput.value = "";
      p.addEventListener("click", (evt) => {
        evt.preventDefault();
        p.classList.add("changeDone");
      });
    }
  });
}
