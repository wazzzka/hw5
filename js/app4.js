//Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.

let digit = parseInt(prompt('Enter number:'));


let evenNumber = (digit % 2 === 0);

if (evenNumber) {
    console.log(`Number(${digit}) is even. The last digit is: ${digit%10}`);
} else {
    console.log(`Number(${digit}) is odd. The last digit is: ${digit%10}`);
}