let btn = document.querySelectorAll("button");
let data = [];
let ul = document.querySelector("ul");
let count = 0;
btn.forEach((item) => {
  item.addEventListener("click", (event) => {
    count++;

    let input = document.querySelector("#textInput");
    if (input.value != "") {
      let li = document.createElement("li");
      li.innerText = input.value;
      //data
      data[length] = input.value;
      console.log(data[length]);

      console.log(li);
      ul.append(li);
    } else {
      console.log(alert("Pleace enter the input value ."));
    }
    let div = document.querySelector(".insert-list");

    if ((ul.childElementCount = 0)) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }

    let divInput = document.querySelector(".textInput-div");
    if (divInput.style.display === "block") {
      divInput.style.display = "none";
    } else {
      divInput.style.display = "block";
    }
    event.preventDefault();
  });
});
