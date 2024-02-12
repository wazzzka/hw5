// Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)

let digitA = parseInt(prompt('Enter digit A:'));
let digitB = parseInt(prompt('Enter digit B:'));


let bIsDivisorA = (digitA % digitB === 0);
let aIsDivisorB = (digitB % digitA === 0);

if (bIsDivisorA) {
    console.log(`b(${digitB}) is divisor for a(${digitA})`);
}
if (!aIsDivisorB) {
    console.log(`a(${digitA}) is not a divisor for b(${digitB})`);
}
if (aIsDivisorB) {
    console.log(`a(${digitA}) is divisor for b(${digitB})`);
}
if (!bIsDivisorA) {
    console.log(`b(${digitB}) is not a divisor for a(${digitA})`);
}