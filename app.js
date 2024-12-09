const buttonsEL = document.querySelectorAll(".button");
const calculatorEL = document.querySelector("#calculator");
const displayEl = document.querySelector(".display");

let result = 0;
let math = [];
let currentInput = "";
displayEl.textContent = 0;

calculatorEL.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    currentInput += event.target.innerText;
    displayEl.textContent = currentInput;
    math.push(event.target.innerText);
  } else if (event.target.innerText === "C") {
    displayEl.textContent = "0";
  } else if (event.target.classList.contains("operator")) {
    currentInput += event.target.innerText;
    displayEl.textContent = currentInput;
  }

  if (event.target.innerText === "*") {
    math.push("*");
  }

  if (event.target.innerText === "/") {
    math.push("/");
  }

  if (event.target.innerText === "+") {
    math.push("+");
  }

  if (event.target.innerText === "-") {
    math.push("-");
  }

  if (event.target.innerText === "C") {
    math = [];
    currentInput = "";
  }

  if (event.target.innerText === "=") {
    sum = math.join("");
    result = eval(sum);
    displayEl.textContent = result;
    math = [];
    currentInput = "";
  }
});
