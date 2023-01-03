const keys = document.querySelectorAll(".key-text");
const screen = document.getElementById("result");

let num1 = null;
let operation = null;
let num2 = null;

function isNumber(item) {
  return !!item.match(/[0-9.]+/);
}

function notFractional(value) {
  return value.includes(".");
}

function showResult(input = 0) {
  screen.innerText = input;
}
function cleanup() {
  num2 = null;
  operation = null;
}

showResult();

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const value = e.target.innerText;
    if (isNumber(value)) {
      if (null === operation) {
        if (value !== "." || (value === "." && !notFractional(num1))) {
          num1 !== null && num1 !== 0 ? (num1 += value) : (num1 = value);
        }
        showResult(num1);
      } else {
        if (value !== "." || (value === "." && !notFractional(num2))) {
          num2 !== null && num2 !== 0 ? (num2 += value) : (num2 = value);
        }

        console.log(num2);
        switch (operation) {
          case "+": {
            const result = Number(num1) + Number(num2);
            num1 = result;
            showResult(result);
            cleanup();
            break;
          }
          case "-": {
            const result = Number(num1) - Number(num2);
            num1 = result;
            showResult(result);
            cleanup();
            break;
          }
          case "*": {
            const result = Number(num1) * Number(num2);
            num1 = result;
            showResult(result);
            cleanup();
            break;
          }
          case "/": {
            try {
              const result = Number(num1) / Number(num2);
              num1 = result;
              showResult(result);
              cleanup();
            } catch (error) {
              showResult("con't divide my 0.");
            }
            break;
          }
          case "RESET":
          case "DEL": {
            num1 = null;
            showResult();
            cleanup();
            break;
          }
        }
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
