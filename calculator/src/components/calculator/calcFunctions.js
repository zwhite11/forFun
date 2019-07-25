const math = require("mathjs");

let currentValue = "";
let expression = [];
let result = "";
let lastOperation = [];
let operationPressed = false;

class CalcFunctions {
  constructor() {
    currentValue = "0";
    expression = [];
    result = "";
    lastOperation = [];
    operationPressed = false;

  }

  getCurrentValue() {
    return currentValue;
  }

  getExpression() {
    return expression;
  }

  getResult() {
    return result;
  }


  enterDigit(digit) {
    if (currentValue == "0") {
      currentValue = digit;
    }
    else {
      if (operationPressed) {
        currentValue = digit;
        operationPressed = false;
        return;
      }
      currentValue += digit;
    }
  }

  clear() {
    if (currentValue === "") {
      return;
    }

    if (currentValue == "0") {
      this.deactiveButton();
      expression = [];
      lastOperation = [];
    }

    currentValue = "0";


  }

  percentage() {
    currentValue = math.evaluate(currentValue + " / 100");
  }

  decimal() {
    let lastChar = currentValue.charAt(currentValue.length - 1);
    if (lastChar !== ".") {
      currentValue = currentValue + ".";
    }
  }

  plusMinus() {
    if (currentValue === "0") {
      return;
    }

    if (currentValue.charAt(0) === "-") {
      currentValue = currentValue.slice(1);
    } else {
      currentValue = "-" + currentValue;
    }
  }

  add() {
    expression.push(currentValue);
    expression.push("+");
    operationPressed = true;
  }

  subtract() {
    expression.push(currentValue);
    expression.push("-");

    operationPressed = true;
  }

  multiply() {
    expression.push(currentValue);
    expression.push("*");
    operationPressed = true;
  }

  divide() {
    expression.push(currentValue);
    expression.push("/");
    operationPressed = true;
  }


  deactiveButton() {
    let active = document.getElementById("keypad").querySelectorAll(".active");
    console.log("active: ", active.length);

    if (active.length > 0) {
      active[0].classList.remove("active");
    }
  }

  equals() {
    if (currentValue === "") {
      return;
    }

    this.deactiveButton();

    // if expression is empty
    if (expression.length == 0) {
      lastOperation.unshift(currentValue);
      expression = lastOperation;
      lastOperation = [];

    }
    else {
      expression.push(currentValue);
      lastOperation = [];
    }

    const joinedExpression = expression.join(" ");

    result = math.evaluate(joinedExpression).toString();
    currentValue = result;

    let expressionLength = expression.length;
    lastOperation.push(expression[expressionLength - 2]);
    lastOperation.push(expression[expressionLength - 1]);

    expression = [];
    operationPressed = false;
  }
}

export default CalcFunctions;
