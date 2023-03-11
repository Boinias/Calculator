let operator = "";
let firstArg = "";
let secondArg = "";
let answer = 0;

function whichNum () {
    let value = this.textContent
    if (operator != "") {
        secondArg = secondArg + value
    } else if (operator == "") {
        firstArg = firstArg + value
    }
}



function add (num1, num2) {
   answer = num1 + num2
}

function subtract (num1, num2) {
    answer = num1 - num2
}

function multiply (num1, num2) {
    answer = num1 * num2
}

function divide (num1, num2) {
    answer = num1 / num2
}
