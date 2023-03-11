let operator = "";
let firstArg = "";
let secondArg = "";
let answer = "";
let display = document.getElementById('display')



function clearAll () {
    firstArg = ""
    secondArg = ""
    operator = ""
    answer = ""
}


function whichNum () {
    let value = this.textContent
    if (answer != "") {
        firstArg = ""
        secondArg = ""
        operatort = ""
        answer = ""
        firstArg = firstArg + value
        display.textContent=`${firstArg} ${operator} ${secondArg}`;
        //unsure of the below else if and what it is meant to be doing but it's in my 
        //paper notes that I should make it
    } else if (answer != "" && firstArg != "") {
        firstArg = ""
        secondArg = ""
        operator = ""
        answer = ""
        firstArg = firstArg + value
        display.textContent=`${firstArg} ${operator} ${secondArg}`;
    } else if (operator != "") {
        secondArg = secondArg + value
        display.textContent=`${firstArg} ${operator} ${secondArg}`;
    } else if (operator == "") {
        firstArg = firstArg + value
        display.textContent=`${firstArg} ${operator} ${secondArg}`;
    } 
}


function whichOp () {
    let value = this.textContent
    operator = value
}

function add (num1, num2) {
    answer = Number(num1) + Number(num2)
    display.textContent=`${answer}`
    num1 = answer
    num2 = ""
    operator = ""
 }
 
 function subtract (num1, num2) {
     answer = num1 - num2
     display.textContent=`${answer}`
     num1 = answer
     num2 = ""
     operator = ""
 }
 
 function multiply (num1, num2) {
     answer = num1 * num2
     display.textContent=`${answer}`
     num1 = answer
     num2 = ""
     operator = ""
 }
 
 function divide (num1, num2) {
     answer = num1 / num2
     display.textContent=`${answer}`
     num1 = answer
     num2 = ""
     operator = ""
 }
 

function operate (operate, firstArg, secondArg) {
    if (operator == "+") {
        add (firstArg, secondArg)
    } else if (operator == "-") {
        subtract (firstArg, secondArg)
    } else if (operator == "*") {
        multiply (firstArg, secondArg)
    } else if (operator == "/") {
        divide (firstArg, secondArg)
    }
}

