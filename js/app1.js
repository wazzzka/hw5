//Даны два различных числа. Определить какое из них больше, а какое меньше.

let firstDigit = parseInt(prompt('Enter first digit:'));
let secondDigit = parseInt(prompt('Enter second digit:'));

if (firstDigit > secondDigit) {
    console.log('First digit bigger than second');
} else if (firstDigit < secondDigit) {
    console.log('Second digit bigger than first');
} else {
    console.log('Digits are equal');
}