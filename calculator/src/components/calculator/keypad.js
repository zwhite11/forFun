import React from "react";
import Button from 'react-bootstrap/Button';


class Keypad extends React.Component {

    handleOnNumber = (e) => {
        this.props.onNumber(e.target.value);
    };

    render() {
        return (
            <div className={'keypad container w-25'} id='keypad' >
                <div className='key-row row'>
                    <Button className='col btn-secondary' id='clearButton' value='clear' onClick={this.props.onClear}>AC</Button>
                    <Button className='col btn-secondary' value='plusMinus' onClick={this.props.onPlusMinus}>+/-</Button>
                    <Button className='col btn-secondary' value='percentage' onClick={this.props.onPercentage}>%</Button>
                    <Button className='col btn-warning' id='divide' value='divide' onClick={this.props.onDivide}>/</Button>
                </div>
                <div className='key-row row'>
                    <Button className='col btn-dark' value='7' onClick={this.handleOnNumber}>7</Button>
                    <Button className='col btn-dark' value='8' onClick={this.handleOnNumber}>8</Button>
                    <Button className='col btn-dark' value='9' onClick={this.handleOnNumber}>9</Button>
                    <Button className='col btn-warning' id='multiply' value='multiply' onClick={this.props.onMultiply}>*</Button>
                </div>
                <div className='key-row row'>
                    <Button className='col btn-dark' value='4' onClick={this.handleOnNumber}>4</Button>
                    <Button className='col btn-dark' value='5' onClick={this.handleOnNumber}>5</Button>
                    <Button className='col btn-dark' value='6' onClick={this.handleOnNumber}>6</Button>
                    <Button className='col btn-warning' id='subtract' value='subtract' onClick={this.props.onSubtract}>-</Button>
                </div>
                <div className='key-row row'>
                    <Button className='col btn-dark' value='1' onClick={this.handleOnNumber}>1</Button>
                    <Button className='col btn-dark' value='2' onClick={this.handleOnNumber}>2</Button>
                    <Button className='col btn-dark' value='3' onClick={this.handleOnNumber}>3</Button>
                    <Button className='col btn-warning' id="add" value='add' onClick={this.props.onAdd}>+</Button>
                </div>
                <div className='key-row row '>
                    <Button className='col-6 btn-dark' value='0' onClick={this.handleOnNumber}>0</Button>
                    <Button className='col-3 btn-dark' value='.' onClick={this.props.onDecimal}>.</Button>
                    <Button className='col-3 btn-warning' value='=' onClick={this.props.onEquals}>=</Button>
                </div>
            </div>

        )
    }


}

export default Keypad;