function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return Number(a) + Number(b);
        case '−':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            return a / b;
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
const negative = document.getElementById('negative');

const firstNum = document.getElementById('first-number');
const secondNum = document.getElementById('second-number');
const operatorDisplay = document.getElementById('operator-display');
const resultDisplay = document.getElementById('result');

negative.addEventListener('click', (e) => {
    if (firstNum.textContent === "") {
        displayNumber(firstNum, e.target.value);
    } else {
        displayNumber(secondNum, e.target.value);
    }
});

function inputNumbers() {
    digitsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (operatorDisplay.textContent === "") {
                displayNumber(firstNum, e.target.value);
            } else {
                displayNumber(secondNum, e.target.value);
            }

            operatorsButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    if (secondNum.textContent != "") {
                        let result = doEquals(firstNum.textContent, secondNum.textContent, operatorDisplay.textContent);
                        console.log(operatorDisplay.textContent);
                        firstNum.textContent = result;
                        secondNum.textContent = "";
                        resultDisplay.textContent = "";
                    }
                    displayOperating(operatorDisplay, e.target.value);
                });
            });

            equals.addEventListener('click', () => {
                let result = doEquals(firstNum.textContent, secondNum.textContent, operatorDisplay.textContent);
                displayOperating(resultDisplay, result);
            });
        });
    });
}

function displayNumber(target, value) {
    target.textContent += value;
}

function displayOperating(target, value) {
    target.textContent = value;
}

const operatorsButtons = document.querySelectorAll('.operator');

const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

function doEquals(fnum, snum, op) {
    const result = operate(fnum, snum, op);
    return result;
}

clear.addEventListener('click', () => {
    firstNum.textContent = "";
    secondNum.textContent = "";
    operatorDisplay.textContent = "";
    resultDisplay.textContent = "";
});

inputNumbers();