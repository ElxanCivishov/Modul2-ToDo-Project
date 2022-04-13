let btn = document.querySelectorAll("button");
let data = [];
let ul = document.querySelector("ul");
let input = document.querySelector("#textInput");
// click button with keypress
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addList(event);
  }
});
//button click event
btn.forEach((item) => {
  item.addEventListener("click", addList);
});

function addList(event) {
  let error = document.querySelector(".error");
  input.addEventListener("change", (event) => {
    error.style.display = "none";
  });

  if (input.value != "") {
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    let divImg = document.createElement("img");

    divImg.src = "/Modul2-ToDo-Project/Img-Icon/delete-icon-opocity.png";
    divImg.classList.add("delete-icon-img");
    delbtn.classList.add("delete-icon-list");

    delbtn.append(divImg);
    delbtn.style.border = "none";
    delbtn.style.background = "white";
    li.innerText = input.value;
    //data
    data[length] = input.value;
    li.id = data[length];
    li.append(delbtn);

    ul.append(li);
    input.value = "";
  } else {
    error.style.display = "block";
  }
  let div = document.querySelector(".insert-list");
  if ((ul.childElementCount = 0)) {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}
//delete list with click button
ul.addEventListener("click", function (event) {
  if (event.target.className === "delete-icon-img") {
    event.target.parentElement.parentElement.remove();
  } else if (event.target.tagName === "LI") {
    input.value = event.target.innerText;
  }
});
//delete input button
const deletebtn = document.querySelector(".delete-icon img");
deletebtn.addEventListener("click", (event) => {
  input.value = "";
});
deletebtn.addEventListener("mouseover", btnmouseOver);
deletebtn.addEventListener("mouseout", mouseOut);
function btnmouseOver(event) {
  event.target.src = "/Modul2-ToDo-Project/Img-Icon/delete-icon.png";
  deletebtn.removeEventListener("mouseout", btnmouseOver);
}

function btnmouseOut(event) {
  event.target.src = "/Modul2-ToDo-Project/Img-Icon/delete-icon-opocity.png";
  deletebtn.removeEventListener("mouseover", btnmouseOut);
}
// mouseover and mouse out event for delete button list
ul.addEventListener("mouseover", mouseOver);
ul.addEventListener("mouseout", mouseOut);

function mouseOver(event) {
  if (event.target.className === "delete-icon-img") {
    event.target.src = "/Modul2-ToDo-Project/Img-Icon/delete-icon.png";
    ul.removeEventListener("mouseout", mouseOver);
  }
}

function mouseOut(event) {
  if (event.target.className === "delete-icon-img") {
    event.target.src = "/Modul2-ToDo-Project/Img-Icon/delete-icon-opocity.png";
    ul.removeEventListener("mouseover", mouseOut);
  }
}
