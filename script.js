let btn = document.querySelectorAll("button");
let data = [];
let ul = document.querySelector("ul");

//button click event 
btn.forEach((item) => {
  item.addEventListener("click", (event) => {
    let input = document.querySelector("#textInput");
    let error = document.querySelector(".error");
    input.addEventListener("change", (event) => {
      error.style.display = "none";
    });

    if (input.value != "") {
      let li = document.createElement("li");
      li.innerText = input.value;
      //data
      data[length] = input.value;
      console.log(data[length]);
      console.log(li);
      ul.append(li);
    } else {
      error.style.display = "block";
    }
    let div = document.querySelector(".insert-list");
    if ((ul.childElementCount = 0)) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
    event.preventDefault();
  });
});
