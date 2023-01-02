"use strict";
let num1 = null;
let operation = null;
let num2 = null;

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

const keys = document.querySelectorAll(".key-text");
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const value = e.target.innerText;
    if (isNumber()) {
    } else {
    }
  });
});
