let num1 = parseInt(prompt("please enter a number"));

let num2 = parseInt(prompt("please enter a number"));

let opr = prompt("please enter the operator");



const calculate = [num1, operation, num2] ;
    switch (operation) {
      case "+":
         return num1 + num2;
      case "/":
         return num1 / num2;
      case "*":
         return num1 * num2;
      case "%":
         return num1 % num2;
      case "-":
         return num1 - num2;
      default:
         return 0;
}

// console

// class Calculator {
//    constructor(previousOperandTextElement, currentOperandTextElement) {
//       this.previousOperandTextElement = previousOperandTextElement
//       this.currentOperandTextElement = currentOperandTextElement
//    }


//    clear() {
//       this.currentOperand = ''
//       this.previousOperand = ''
//       this.operation = undefined
//    }

//    delete() {

//    }

//    appendNumber(number) {

//    }

//    chooseOperation(operation) {

//    }

//    compute() {

//    }

//    updateDisplay() {

//    }
// }



// const numberButtons = document.querySelectorAll('[data-number]')
// const numberButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement  = document.querySelector('[data-current-operand]')
