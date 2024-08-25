// JS CODE
function handleClick() {
  let input = document.querySelector("input");
  if (input.value != "") {
    let child = document.createElement("li");
    child.textContent = input.value;
    parentList.appendChild(child);
    child.addEventListener("click", () => editItem(child));
    input.value = "";
  }
}

function editItem(li) {
  const userInput = prompt("edit text");
  if (userInput != "") {
    li.textContent = userInput;
  }
}

let parentList = document.getElementById("list-app");
let button = document
  .querySelector("button")
  .addEventListener("click", handleClick);
