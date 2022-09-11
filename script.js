let numOne = '';
let numTwo = '';
let operator = '';

const numbers = document.querySelectorAll('.num-btn');
const operators = document.querySelectorAll('.op-btn');
const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('allClear');
const input = document.getElementById('input');
const answers = document.getElementById('answer');
const equals = document.getElementById('equals');
const dot = document.getElementById('dot');

numbers.forEach((button) =>
  button.addEventListener('click', () => newNumber(button.textContent))
)

operators.forEach((button) =>
  button.addEventListener('click', () => operate(button.textContent))
)

equals.addEventListener('click', calculate);

clearButton.addEventListener('click', allClear);

deleteButton.addEventListener('click', deleteOne);

dot.addEventListener('click', addDot);

function deleteOne() {
  if(operator === '' && numTwo === ''){
    if(input.length > 1){
      input.textContent = input.textContent.toString().slice(0, -1);
      numOne = numOne.toString().slice(0,-1);
    }else {
      input.textContent = 0;
    }
}else if(operator !== '' && numTwo === ''){
    input.textContent = input.textContent.toString().slice(0, -1);
    operator = '';
}else {
  input.textContent = input.textContent.toString().slice(0, -1);
  numTwo = numTwo.toString().slice(0,-1);
  }
}

function addDot() {
  if (numOne.includes('.') && operator === '') {
    return
  }else if(numTwo.includes('.')){
    return
  }else if (operator === ''){
    numOne += '.';
    input.textContent = numOne;
  }else {
    numTwo += '.';
    input.textContent = `${numOne} ${operator} ${numTwo}`;
  }

}

function roundAnswer(number) {
  return Math.round(number * 1000) / 1000

}

function allClear () {
  operator = '';
  numOne = '';
  numTwo = '';
  input.textContent = 0;
  answers.textContent = 0;

}

function newNumber(number) {
    if (operator === ''){
        numOne += number.trim();
        input.textContent = numOne;
    }else {
        numTwo += number.trim();
        input.textContent = `${numOne} ${operator} ${numTwo}`;
        console.log(input.textContent);
    }
}

function operate(symbol){
    if(operator !== '' && numTwo !== ''){
        calculate();
        operator = symbol.trim();
        input.textContent = `${numOne} ${operator} ${numTwo}`; 
    }else {
      operator = symbol.trim(); 
      input.textContent = `${numOne} ${operator}`;
    }
}

function calculate(){
    if (numOne === '' || operator === '' || numTwo === ''){
      return;
    }else {
    answers.textContent = roundAnswer(operation(operator, numOne, numTwo));
    numOne = answers.textContent;
    operator = ''
    numTwo = ''
    input.textContent = `${numOne} ${operator} ${numTwo}`;
    }
  }


function add(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    if (b !== 0) {
        return (a / b);
    } else {
        return "Can't divide by 0";
    }

};

function operation(operatorInput, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operatorInput) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case 'x':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return 'no';
    }
  }