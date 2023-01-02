"use strict";
let num1 = null;
let operation = null;
let num2 = null;

function isNumber(item) {
  return !!item.match(/[0-9.]+/);
}

const keys = document.querySelectorAll(".key-text");
const screen = document.getElementById("result");
screen.innerText = num1 ? num1 : 0;

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const value = e.target.innerText;
    if (isNumber(value)) {
      if (null === operation) {
        num1 !== null ? (num1 += value) : (num1 = value);
        console.log(Number(num1));
      } else {
        num2 !== null ? (num2 += value) : (num2 = value);
        console.log(num2);
      }
    } else {
      operation = value;
      switch (value) {
        case "DEL":
          break;
        case "+":
      }
    }
  });
});
