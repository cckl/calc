const equals = document.querySelector('#equals')
const nums = [...document.querySelectorAll('.num')]
const operators = [...document.querySelectorAll('.op')]
const display = document.querySelector('.calc-display')
const clear = document.querySelector('#clear')
const del = document.querySelector('#del')
const decimal = document.querySelector('#decimal')
let x = '';
let y = '';
let operator = '';
let total = '';

// add numbers to display and store value
nums.forEach(function(num) {
  num.addEventListener('click', displayValue);
})

function displayValue(e) {
  if (display.textContent.toString().length > 9) {
    return
    // issue here: after going way over, it doesn't log y and gives NaN
  }
  if (y === '' && operator === '' && total === '') {
    x += e.target.textContent;
    display.textContent = x;
    console.log(`x is ${x}`)
  }
  else if (x !== '' && total !== '') {
    y += e.target.textContent;
    display.textContent = y;
    console.log(`new y is ${y}`)
  }
  else {
    y += e.target.textContent;
    display.textContent = y;
    console.log(`y is ${y}`)
  }
}

// click operator
operators.forEach(function(operator) {
  operator.addEventListener('click', addOperator)
})

function addOperator(e) {
  if (x === '' && y === '') {
    return
  }
  if (operator === '' && y === '') {
    operator = e.target.textContent;
  }
  if (operator !== '' && y === '') {
    return
  }
  else if (x != '') {
    total = display.textContent;
    calculate(x, operator, y);
    x = total;
    operator = e.target.textContent;
    y = '';
  }
}

// equals button
equals.addEventListener('click', onEquals)

function onEquals() {
  if (x === '' && y === '') {
    return
  }
  if (y !== '' && total !== '') {
    x = total;
  }
  calculate(x, operator, y);
}

// takes inputs and calculates them
function calculate(x, operator, y) {
  if (operator === '+') {
    total = parseFloat(x) + parseFloat(y);
  }
  if (operator === '-') {
    total = x - y;
  }
  if (operator === 'x') {
    total = x * y;
  }
  if (operator === '/') {
    total = x / y;
  }
  if (total.toString().indexOf('.') === -1) {
    display.textContent = total;
  }
  else {
    display.textContent = total.toFixed(6)
  }
  x = total;
  y = '';
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

// decimal button
decimal.addEventListener('click', addDecimal)

function addDecimal(e) {
  if (display.textContent.toString().includes('.')) {
    return;
  }
  if (display.textContent == x) {
    x += e.target.textContent;
    display.textContent = x;
  }
  if (display.textContent == y) {
    y += e.target.textContent;
    display.textContent = y;
  }
}

// delete button
del.addEventListener('click', deleteNum)

function deleteNum() {
  if (display.textContent == x) {
    display.textContent = x.toString().slice(0, -1)
    x = display.textContent;
  }
  if (display.textContent == y) {
    display.textContent = y.toString().slice(0, -1)
    y = display.textContent;
  }
  // can't delete total, understandably
}

// reset
clear.addEventListener('click', clearAll)

function clearAll() {
  x = '';
  y = '';
  operator = '';
  total = '';
  display.textContent = '';
}
