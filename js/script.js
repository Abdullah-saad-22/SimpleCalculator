


const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.textContent;

    if (value === '=') {
      calculate();
    } else if (value === 'AC') {
      clear();
    } else if (value === '←') {
      deleteNumber();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
      previousNumber = currentNumber;
      currentNumber = '';
    } else {
      currentNumber += value;
      result.value = currentNumber;
    }
  });
});

function calculate() {
  result.value = eval(previousNumber + operator + currentNumber);
}

function clear() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  result.value = '';
}

function deleteNumber() {
  currentNumber = currentNumber.slice(0, -1);
  result.value = currentNumber;
}