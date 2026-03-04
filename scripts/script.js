//Variables
let justCalculated = false;

//Objects
let expression = {
  left: "",
  operator: "",
  right: "",
};

//DOM Selections
let operation = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let textArea = document.querySelector("textarea");

//Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Error: Cannot divide by 0!");
    return 0;
  }
  return a / b;
}

function operate() {
  if (expression.operator === "+") {
    expression.left = add(Number(expression.left), Number(expression.right));
  } else if (expression.operator === "-") {
    expression.left = subtract(
      Number(expression.left),
      Number(expression.right),
    );
  } else if (expression.operator === "*") {
    expression.left = multiply(
      Number(expression.left),
      Number(expression.right),
    );
  } else if (expression.operator === "/") {
    expression.left = divide(Number(expression.left), Number(expression.right));
  }
  expression.right = "";
}

function renderScreen() {
  textArea.value = expression.left + expression.operator + expression.right;
}

function updateExpression() {
  const value = this.textContent;
  if (this.classList.contains("number")) {
    if (expression.operator === "") {
      if (justCalculated) {
        expression.left = value;
        expression.operator = "";
        expression.right = "";
        justCalculated = false;
      } else {
        expression.left += value;
      }
    } else {
      expression.right += value;
    }
  }

  if (this.classList.contains("operator")) {
    if (this.classList.contains("equals")) {
      if (expression.left !== "" && expression.right !== "") {
        operate();

        justCalculated = true;
      }
      expression.operator = "";
      expression.right = "";
      renderScreen();
      return;
    }
    if (this.classList.contains("negative")) {
      if (expression.left === "") {
        expression.left = "-";
        console.log(expression);
        renderScreen();
        return;
      } else if (expression.right === "" && expression.operator !== "") {
        expression.right = "-";
        renderScreen();
        return;
      }
    }
    if (expression.left === "") return;

    if (expression.operator === "") {
      expression.operator = value;
    } else if (expression.right === "") {
      expression.operator = value;
    } else {
      operate();
      expression.operator = value;
    }
  }
  console.log(expression);
  renderScreen();
}

function assignNumbersEventListener(buttons) {
  for (const item of buttons) {
    item.addEventListener("click", updateExpression);
  }
}

//Calls

assignNumbersEventListener(numbers);
assignNumbersEventListener(operators);
