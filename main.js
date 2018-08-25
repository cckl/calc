const equals = document.querySelector('.button-equals')
const nums = [...document.querySelectorAll('.num')]
const operators = [...document.querySelectorAll('.operator')]
const display = document.querySelector('.calc-display')
const calculator = document.querySelector('.calc-body')
const clear = document.getElementById('clear')
let x = '';
let y = '';
let operator = '';

// add numbers to display
nums.forEach(function(num) {
  num.addEventListener('click', displayNum);
})

function displayNum(e) {
  let val = e.target.textContent;
  if (display.textContent === '0') {
    display.textContent = val;
  }
  else {
    display.textContent += val;
  }
}

// operators
operators.forEach(function(operator) {
  operator.addEventListener('click', addOperator)
})

function addOperator(e) {
  let val = e.target.textContent;
  operator = val;
  console.log(`operator is ${operator}`)
  if (x == undefined) {
    x = display.textContent;
    console.log(`x is ${x}`)
  }
  else {
    y = display.textContent
    console.log(`y is ${y}`)
  }
  display.textContent = "";
}

// calculate
equals.addEventListener('click', onEquals)

function onEquals() {
  y = display.textContent;
  console.log(`y is ${y}`)
  calculate(x, operator, y)
}

function calculate(x, operator, y) {
  if (operator === '+') {
    add(x, y);
  }
  if (operator === '-') {
    subtract(x, y);
  }
  if (operator === 'x') {
    multiply(x, y);
  }
  if (operator === '/') {
    divide(x, y);
  }
}

function add(x, y) {
  let sum = parseFloat(x) + parseFloat(y);
  display.textContent = sum;
}

function subtract(x, y) {
  display.textContent = x - y;
}

function multiply(x, y) {
  display.textContent = x * y;
}

function divide(x, y) {
  display.textContent = x / y;
}

// reset
clear.addEventListener('click', clearAll)

function clearAll() {
  x = undefined;
  y = undefined;
  operator = undefined;
  display.innerText = 0;
}

// const currentDisplay = display.textContent;
// const x = calculator.dataset.currentDisplay;
// const operator = calculator.dataset.operator;
// const y = calculator.dataset.currentDisplay;
