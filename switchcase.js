//simple calculator using JS and switch case

//we need this library module to accept user input
const prompt = require('prompt-sync')();

let result;
//accept the operator input
const operator = prompt('enter operator(either +, -, *,or /):');

//accept an operator input
const num1 = parseFloat(prompt("Enter the first number : "));
const num2 = parseFloat(prompt("Enter the second number : "));

switch(operator){
    //formula for addition
    case '+':
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;
    //formula for subtraction
    case '-':
    result = num1 - num2;
    console.log(`num1 + num2 = ${result}`);
    break;
    //formula for'/'
    case'/':
    result = num1 / num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;
    //formula for *
    case'*':
    result = num1 * num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;




    







}
