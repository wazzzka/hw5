// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

let digit = prompt('Enter a two-digit number:');

let firstNumber = parseInt(digit / 10);
let secondNumber = (digit % 10);

let compare = (firstNumber > secondNumber);

let twoDigitCheck = (digit.length === 2);


if (twoDigitCheck) {
    console.log(compare ? `You enter(${digit}), first number(${firstNumber}) is bigger than second(${secondNumber})` : `You enter(${digit}), first number(${firstNumber}) is less than second(${secondNumber})`)
} else {
    console.log(`You enter(${digit}) this is ${digit.length}-digit number. Please, enter two-digit`);
}