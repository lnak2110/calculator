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

const digitsButtons = document.getElementById('digits-btn-container');

for (let i = 0; i <= 9; i++) {
    const digit = document.createElement('button');
    digit.classList.add('btn');
    digit.setAttribute('value', `${i}`);
    digit.textContent = `${i}`;
    digitsButtons.appendChild(digit);
}
