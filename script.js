let btn = document.querySelectorAll("button");
let data = [];
let ul = document.querySelector("ul");
let input = document.querySelector("#textInput");
let div = document.querySelector(".insert-list");
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
    divImg.src = "Img-Icon/delete-icon-opocity.png";
    divImg.classList.add("delete-icon-img");
    delbtn.classList.add("delete-icon-list");
    li.classList.add("list");
    delbtn.append(divImg);
    delbtn.style.border = "none";
    delbtn.style.borderRadius = "71px";
    delbtn.style.background = "white";
    li.innerText = input.value;
    //data
    data.push(input.value);
    li.id = data[length];
    li.append(delbtn);
    ul.append(li);
    input.value = "";
  } else {
    error.style.display = "block";
  }
  div.style.display = "block";
}
// hidden div list
// function hiddenListDiv() {
//   if ((ul.children.length = 0)) {
//     div.style.display = "none";
//     console.log(ul.children.length);
//   } else {
//     div.style.display = "block";
//     console.log(ul.children.length);
//   }
// }
//delete list on click button
ul.addEventListener("click", function (event) {
  if (event.target.className === "delete-icon-img") {
    // hiddenListDiv();
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
  event.target.src = "Img-Icon/delete-icon.png";
  deletebtn.removeEventListener("mouseout", btnmouseOver);
}

function btnmouseOut(event) {
  event.target.src = "Img-Icon/delete-icon-opocity.png";
  deletebtn.removeEventListener("mouseover", btnmouseOut);
}
// mouseover and mouse out event for delete button list
ul.addEventListener("mouseover", mouseOver);
ul.addEventListener("mouseout", mouseOut);

function mouseOver(event) {
  if (event.target.className === "delete-icon-img") {
    event.target.src = "Img-Icon/delete-icon.png";
    ul.removeEventListener("mouseout", mouseOver);
  } else if (event.target.className === "list") {
    event.target.style.background = "#ffdc40";
    ul.removeEventListener("mouseout", mouseOver);
  }
}

function mouseOut(event) {
  if (event.target.className === "delete-icon-img") {
    event.target.src = "Img-Icon/delete-icon-opocity.png";
    ul.removeEventListener("mouseover", mouseOut);
  } else if (event.target.className === "list") {
    event.target.style.background = "white";
    ul.removeEventListener("mouseover", mouseOut);
  }
}
//sort button

let sortDiv = document.querySelector(".sort-icon");
sortDiv.addEventListener("click", sortList);
function sortList(event) {
  if (event.target.id === "sort-icon-img") {
    if (ul.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < ul.children.length; i++) {
        newDAta.push(ul.children[i].childNodes[0].textContent);
      }
      event.target.src = "Img-Icon/sort-down.png";
      newDAta.sort();
      console.log(newDAta);
      for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sortDiv.removeEventListener("click", sortList);
    sortDiv.addEventListener("click", descSortList);
  }
}
function descSortList(event) {
  if (event.target.id === "sort-icon-img") {
    if (ul.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < ul.children.length; i++) {
        newDAta.push(ul.children[i].childNodes[0].textContent);
      }
      event.target.src = "Img-Icon/sort-up.png";
      newDAta.sort().reverse();
      console.log(newDAta);
      for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sortDiv.removeEventListener("click", descSortList);
    sortDiv.addEventListener("click", sortList);
  }
}
