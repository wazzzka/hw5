//Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

let digit = prompt('Enter a six-digit number:');

let firstNumber = parseInt((digit / 100000) % 10);
let secondNumber = parseInt((digit / 10000) % 10);
let thirdNumber = parseInt((digit / 1000) % 10);
let fourNumber = parseInt((digit / 100) % 10);
let fivedNumber = parseInt((digit / 10) % 10);
let sixthNumber = parseInt(digit % 10);

/*
checking corect data))
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(fourNumber);
console.log(fivedNumber);
console.log(sixthNumber);
*/

//Is it true that all of its digits are the same?
let digitArePalyndrome = (firstNumber === sixthNumber && secondNumber === fivedNumber && thirdNumber === fourNumber);

let sixDigitCheck = (digit.length === 6);

if (sixDigitCheck) {
    console.log(digitArePalyndrome ? `You enter:${digit}:first number: ${firstNumber},second number: ${secondNumber},third number: ${thirdNumber},third number: ${thirdNumber},third number: ${thirdNumber},third number: ${thirdNumber}. the digit are palyndrome` : `You enter:${digit}:first number: ${firstNumber},second number: ${secondNumber},third number: ${thirdNumber},third number: ${thirdNumber},third number: ${thirdNumber},third number: ${thirdNumber}. the digit are NOT palyndrome`);
} else {
    console.log(`You enter(${digit}) this is ${digit.length}-digit number. Please, enter six-digit`);
}