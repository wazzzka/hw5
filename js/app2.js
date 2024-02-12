// Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?

let kilometersDigit = parseFloat(prompt('Enter kilometers value:'));
let footDigit = parseFloat(prompt('Enter foots value:'));


let footsToKilometers = (footDigit * 0.00030479999767864); //1000 ft =	0.3048 km

// console.log('footsstokm ' + footesToKilometers);
// console.log('foots ' + footDigit);
// console.log('kilometers ' + kilometersDigit);

if (kilometersDigit > footsToKilometers) {
    console.log('Foots digit lower than kilometers');
} else if (kilometersDigit < footsToKilometers) {
    console.log('Kilometers digit lower than Foots');
} else {
    console.log('Digits are equal');
}