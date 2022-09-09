let numOne = '';
let numTwo = '';
let operator = '';

const numbers = document.querySelectorAll('.num-btn');
const operators = document.querySelectorAll('.op-btn');
const deleteButton = document.querySelector('.del-btn');
const clearButton = document.querySelector('.clear-button');
const input = document.getElementById('input');
const answers = document.getElementById('answer');
const equals = document.getElementById('equals');

numbers.forEach((button) =>
  button.addEventListener('click', () => newNumber(button.textContent))
)

operators.forEach((button) =>
  button.addEventListener('click', () => operate(button.textContent))
)

/*equals.addEventListener('click', function (){
    operation(operator, numOne, numTwo);
});*/

equals.addEventListener('click', calculate);

function newNumber(number) {
    if (operator === ''){
        numOne += number;
        input.textContent = numOne;
    }else {
        numTwo += number;
        input.textContent = `${numOne} ${operator} ${numTwo}`;
        console.log(input.textContent);
    }
}

function operate(symbol){
    if(operator !== ''){
        calculate(); 
    }else {
      operator = symbol; 
      input.textContent = `${numOne} ${operator}`;
        /*operator = symbol;*/
    }
}

function calculate(){
    answers.textContent = operation(operator, numOne, numTwo);
    input.textContent = `${numOne} ${operator} ${numTwo} =`;
    console.log(operator);
    console.log(numOne);
    console.log(numTwo);
  }


function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return "Can't divide by 0";
    } else {
        return a / b;
    }

};

function operation(operatorInput, a, b) {
    a = Number(a)
    b = Number(a)
    switch (operatorInput) {
      case '+':
        return add (a, b);
      case '-':
        return subtract (a, b);
      case 'x':
        return multiply (a, b);
      case '/':
        if (b === 0) return 'You cannot divide by 0';
        else return divide (a, b);
      default:
        return 'no';
    }
  }