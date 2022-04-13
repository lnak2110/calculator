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

digitsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayScreen(e.target.value);
    });
});

const displayValue = document.createElement('div');
displayValue.classList.add('display-value');
displayContainer.appendChild(displayValue);
displayValue.textContent = "";

function displayScreen(value) {
    displayValue.textContent += value;
}