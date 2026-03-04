//Variables
const PLUS = 0;
const MINUS = 1;
const MULTIPLICATION = 2;
const DIVISION = 3;

//Arrays
let operatorArray = ["+", "-", "*", "/"];

//Objects
let expression = {
  left: 0,
  operator: "",
  right: 0,
};

//DOM Selections
let operation = document.querySelector(".screen");

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
  if (b === 0) return "Error: Cannot divide by 0!";

  return a / b;
}

function operate() {
  //I want to read the whole string
  //Put everything on the left of the operator in the left variable
  //Put everything on the right of the operator in the right variable
  //I need a way to detect the operator and put it in the operator variable;
  //Depending on the operator, do the correct calculations
  //Update the string and return it to the screen text field.
}
