let operator;
let firstArg;
let secondArg;
let answer = 0;

const zero = document.getElementById("Zero");
const one = document.getElementById("One");
const two = document.getElementById("Two");
const three = document.getElementById("Three");
const four = document.getElementById("Four");
const five = document.getElementById("Five");
const six = document.getElementById("Six");
const seven = document.getElementById("Seven");
const eight = document.getElementById("Eight");
const nine = document.getElementById("Nine");

const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven",
"eight", "nine"]

digits.forEach(digit => {
      digit.addEventListener('click', () => {
        answer = answer + 1;
      })
    });

console.log (answer)




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
