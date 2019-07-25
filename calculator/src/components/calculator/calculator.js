import React from "react";

import CalcFunctions from "./calcFunctions";
import Display from "./display";
import Keypad from "./keypad";

const calc = new CalcFunctions();

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: [],
      value: "0"
    };

    this.handleOnNumber = this.handleOnNumber.bind(this);
    this.handleOnClear = this.handleOnClear.bind(this);
    this.handleOnPlusMinus = this.handleOnPlusMinus.bind(this);
    this.handleOnPercentage = this.handleOnPercentage.bind(this);
    this.handleOnDivide = this.handleOnDivide.bind(this);
    this.handleOnMultiply = this.handleOnMultiply.bind(this);
    this.handleOnSubtract = this.handleOnSubtract.bind(this);
    this.handleOnAdd = this.handleOnAdd.bind(this);
    this.handleOnDecimal = this.handleOnDecimal.bind(this);
    this.handleOnEquals = this.handleOnEquals.bind(this);
  }

  handleOnDecimal() {
    calc.decimal();

    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });
  }

  handleOnPercentage() {
    calc.percentage();

    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });
  }

  handleOnClear() {
    calc.clear();

    this.setClearType();
    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });
  }

  setClearType() {
    let clearButton = document.getElementById('clearButton');

    if (calc.getCurrentValue() == '0') {
      clearButton.textContent = 'AC';
    }
    else {
      clearButton.textContent = 'C'
    }

  }

  handleOnNumber(digit) {
    calc.enterDigit(digit);

    this.setState({ value: calc.getCurrentValue() });
    this.setClearType();
  }

  handleOnAdd() {
    calc.add();

    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });
    document.getElementById("add").classList.add("active");
  }

  handleOnSubtract() {
    calc.subtract();

    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });

    document.getElementById("subtract").classList.add("active");
  }

  handleOnPlusMinus() {
    calc.plusMinus();
    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });
  }

  handleOnMultiply() {
    calc.multiply();

    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });

    document.getElementById("multiply").classList.add("active");
  }

  handleOnDivide() {
    calc.divide();

    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });

    document.getElementById("divide").classList.add("active");
  }

  handleOnEquals() {
    calc.equals();

    this.setState({
      expression: calc.getExpression(),
      value: calc.getCurrentValue().toString()
    });


  }

  render() {
    return (
      <div className="mx-auto">
        <Display value={this.state.value} />
        <Keypad
          onNumber={this.handleOnNumber}
          onPlusMinus={this.handleOnPlusMinus}
          onAdd={this.handleOnAdd}
          onSubtract={this.handleOnSubtract}
          onPercentage={this.handleOnPercentage}
          onMultiply={this.handleOnMultiply}
          onDivide={this.handleOnDivide}
          onDecimal={this.handleOnDecimal}
          onEquals={this.handleOnEquals}
          onClear={this.handleOnClear}
        />
      </div>
    );
  }
}
