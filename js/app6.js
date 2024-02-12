/*
Дано трехзначное число. 
- Определить является ли четной сумма его цифр. 
- Определить, кратна ли сумма его цифр пяти. 
- Определить является ли произведение его цифр больше 100. 
*/

let digit = prompt('Enter a three-digit number:');

let firstNumber = parseInt((digit / 100) % 10);
let secondNumber = parseInt((digit / 10) % 10);
let thirdNumber = parseInt(digit % 10);

let sumOfNumbers = (firstNumber + secondNumber + thirdNumber);

let threeDigitCheck = (digit.length === 3);

let isEvenSumOfDigits = (sumOfNumbers % 2 === 0);
// Determine if the sum of its digits is even
console.log(isEvenSumOfDigits);

let isMultipleOfFive = (sumOfNumbers % 5 === 0);
// Determine whether the sum of its digits is a multiple of five.
console.log(isMultipleOfFive);

let isProductGreater = ((firstNumber * secondNumber * thirdNumber) > 100);
// Determine whether the product of its digits is greater than 100.


if (threeDigitCheck) {
    console.log(isEvenSumOfDigits ? `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers} . Sum of its digits is even` : `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers}. Sum of its digits is odd`);
    console.log(isMultipleOfFive ? `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers} . Sum of its digits is a multiple of five` : `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers}. is NOT multiple of five`);
    console.log(isProductGreater ? `You enter:${digit}, the product of three-digits = ${firstNumber} * ${secondNumber} * ${thirdNumber} = ${firstNumber * secondNumber * thirdNumber} . Product of its digits is bigger than 100` : `You enter:${digit}, the product of three-digits = ${firstNumber} * ${secondNumber} * ${thirdNumber} = ${firstNumber * secondNumber * thirdNumber} . Product of its digits is bigger than 100`);
}


/*
if (threeDigitCheck) {
    // console.log(isEvenSumOfDigits ? `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers}. Sum of its digits is even`)
    console.log(isEvenSumOfDigits ? `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers} . Sum of its digits is even` : `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers}. Sum of its digits is odd`);
} else if (isMultipleOfFive) {
    console.log(isMultipleOfFive ? `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers} . Sum of its digits is a multiple of five` : `You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers}. is a multiple of five`);
} else if (!isProductGreater) {
    console.log(isProductGreater ? `You enter:${digit}, the product of three-digits = ${firstNumber} * ${secondNumber} * ${thirdNumber} = ${firstNumber * secondNumber * thirdNumber} . Product of its digits is bigger than 100` : `You enter:${digit}, the product of three-digits = ${firstNumber} * ${secondNumber} * ${thirdNumber} = ${firstNumber * secondNumber * thirdNumber} . Product of its digits is bigger than 100`);
}
// */

// if (threeDigitCheck) {
//     switch (digit) {
//         case isEvenSumOfDigits:
//             console.log(`You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers}. Sum of its digits is even`);
//         case isMultipleOfFive:
//             console.log(`You enter:${digit}, the Sum of three-digits = ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sumOfNumbers} . Sum of its digits is a multiple of five`);
//         case isProductGreater:
//             console.log(`You enter:${digit}, the product of three-digits = ${firstNumber} * ${secondNumber} * ${thirdNumber} = ${firstNumber * secondNumber * thirdNumber} . Product of its digits is bigger than 100`);
//     }
// }
// console.log(threeDigitCheck);