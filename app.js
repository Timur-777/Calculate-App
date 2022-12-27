let x = "";
let y = "";
let sign = "";
let finish = false;
let equal = "";

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "8", "9", "."];
const action = ["*", "+", "-", "/", "%"];

const screen = document.querySelector(".calc-screen");

document.querySelector(".ac").addEventListener("click", allClear);
document.querySelector(".buttons").addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn")) return;
  if (e.target.classList.contains("ac")) return;

  // screen.innerText = "";

  const value = e.target.innerText;
  if (digit.includes(value)) {
    if (y === "" && sign === "") {
      x += value;
      screen.innerText = x;
    } else if (x !== "" && y !== "" && finish) {
      y = value;
      finish = false;
      screen.innerText = y;
    } else {
      y += value;
      screen.innerText = y;
    }
  }
  if (action.includes(value)) {
    sign += value;
    screen.innerText = sign;
  }

  if (value === "=") {
    if (y === "") y = x;
    switch (sign) {
      case "+":
        x = +x + +y;
        break;
      case "-":
        x = +x - +y;
        break;
      case "*":
        x = +x * +y;
        break;
      case "/":
        if (y === "0") {
          screen.innerText = "0";
          x = "";
          y = "";
          sign = "";
          return;
        }
        x = +x / +y;
        break;
      case "%":
        x = (x / 100) * y;
        break;
    }
    finish = true;
    sign = "";
    screen.innerText = x;
    equal += value;
    if (x.toString().length > 12) {
      screen.innerText = "error";
    }
    if (equal.length > 1 && x == 0) {
      allClear();
    }
  }
});

function allClear() {
  x = "";
  y = "";
  sign = "";
  finish = false;
  screen.innerText = 0;
}
