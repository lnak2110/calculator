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
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default: 
            throw Error(`Unsupported operator: ${operator}`);
    }
}

const digitsButtonsContainer = document.getElementById('digits-btn-container');
const displayContainer = document.getElementById('display-container');

for (let i = 0; i <= 9; i++) {
    const digit = document.createElement('button');
    digit.classList.add('btn', 'digit');
    digit.setAttribute('value', `${i}`);
    digit.textContent = `${i}`;
    digitsButtonsContainer.appendChild(digit);
}

const digitsButtons = document.querySelectorAll('.digit');

const firstNum = document.getElementById('first-number');
const secondNum = document.getElementById('second-number');
const operatorDisplay = document.getElementById('operator-display');

firstNum.textContent = "";
secondNum.textContent = "";
operatorDisplay.textContent = "";

function inputNumbers() {
    digitsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (operatorDisplay.textContent === "") {
                displayNumber(firstNum, e.target.value);
            } else {
                displayNumber(secondNum, e.target.value);
            }
        });
    });
}

function displayNumber(target, value) {
    target.textContent += value;
}

function displayOpertor(target, value) {
    target.textContent = value;
}

const operatorsButtons = document.querySelectorAll('.operator');

operatorsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayOpertor(operatorDisplay, e.target.value);
    });
});

inputNumbers();

 