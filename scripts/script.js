//Variables
let justCalculated = false;
let lastOperator = "";
let lastRight = "";

//Objects
let expression = {
  left: "",
  operator: "",
  right: "",
};

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

//DOM Selections
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let extras = document.querySelectorAll(".extra");
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
  if (expression.left === "-") expression.left = "-0";
  if (expression.right === "-") expression.right = "-0";

  lastOperator = expression.operator;
  lastRight = expression.right;

  const a = Number(expression.left);
  const b = Number(expression.right);

  expression.left = String(operations[expression.operator](a, b));

  expression.right = "";
  justCalculated = true;
}

function renderScreen() {
  textArea.value = expression.left + expression.operator + expression.right;
}

function handleNumber(value) {
  if (expression.operator === "") {
    if (justCalculated) {
      expression.left = value;
      expression.operator = "";
      expression.right = "";
      justCalculated = false;
      lastOperator = "";
      lastRight = "";
    } else {
      expression.left += value;
    }
  } else {
    expression.right += value;
  }
}

function handleOperator(value) {
  if (value === "=") {
    if (expression.right === "-") {
      expression.right = "-0";
    }

    if (expression.left !== "" && expression.right !== "") {
      operate();
    } else if (justCalculated && lastOperator !== "") {
      expression.operator = lastOperator;
      expression.right = lastRight;
      operate();
    }

    expression.operator = "";
    expression.right = "";
    return;
  }

  if (value === "-" && expression.left === "") {
    expression.left = "-";
    return;
  }

  if (value === "-" && expression.operator !== "" && expression.right === "") {
    expression.right = "-";
    return;
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

function handleExtra(value) {
  if (value === ".") {
    if (justCalculated) {
      expression.left = "0.";
      expression.operator = "";
      expression.right = "";
      justCalculated = false;
      return;
    }

    if (expression.operator === "") {
      if (expression.left.includes(".")) return;

      if (expression.left === "") {
        expression.left = "0.";
      } else {
        expression.left += ".";
      }
    } else {
      if (expression.right.includes(".")) return;

      if (expression.right === "") {
        expression.right = "0.";
      } else {
        expression.right += ".";
      }
    }
  } else if (value === "Delete") {
    if (expression.right !== "") {
      expression.right = expression.right.slice(0, -1);
    } else if (expression.operator !== "") {
      expression.operator = "";
    } else if (expression.left !== "") {
      expression.left = expression.left.slice(0, -1);
    }

    justCalculated = false;
  } else if (value === "C") {
    expression.left = "";
    expression.operator = "";
    expression.right = "";
    justCalculated = false;

    lastOperator = "";
    lastRight = "";
  }
}

function updateExpression() {
  const value = this.textContent;

  if (this.classList.contains("number")) {
    handleNumber(value);
  } else if (this.classList.contains("operator")) {
    handleOperator(value);
  } else if (this.classList.contains("extra")) {
    handleExtra(value);
  }

  renderScreen();
}

function assignEventListener(buttons) {
  for (const item of buttons) {
    item.addEventListener("click", updateExpression);
  }
}

//Calls

assignEventListener(numbers);
assignEventListener(operators);
assignEventListener(extras);
