/*
Дано трехзначное число. 
Верно ли, что все его цифры одинаковые? 
Есть ли среди его цифр одинаковые?
*/

let digit = prompt('Enter a three-digit number:');

let firstNumber = parseInt((digit / 100) % 10);
let secondNumber = parseInt((digit / 10) % 10);
let thirdNumber = parseInt(digit % 10);

//Is it true that all of its digits are the same?
let numbersAreEqual = (firstNumber === secondNumber && secondNumber === thirdNumber);

//Are any of its digits the same?
let anyDuplicateDigits = (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber);

let threeDigitCheck = (digit.length === 3);

if (threeDigitCheck) {
    console.log(numbersAreEqual ? `You enter:${digit}, first number: ${firstNumber} second number: ${secondNumber} third number: ${thirdNumber}. all digit are the same` : `You enter:${digit}, first number: ${firstNumber} second number: ${secondNumber} third number: ${thirdNumber}. all digit are NOT the same`);
    console.log(anyDuplicateDigits ? `You enter:${digit}, first number: ${firstNumber} second number: ${secondNumber} third number: ${thirdNumber}. you have duplicates` : `You enter:${digit}, first number: ${firstNumber} second number: ${secondNumber} third number: ${thirdNumber}. you have not duplicates`);
}