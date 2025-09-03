// Тернарный оператор (или Условный оператор)

const money = 100;
const cost = 150;

money >= cost ? console.log('You can by it') : console.log('You can not by it');

const canYouByIt = money >= cost ? 'You can by it' : 'You can not by it';
console.log(canYouByIt);




let canYouByIt1;

if (money >= cost) {
  canYouByIt1 = 'You can by it';
} else {
  canYouByIt1 = 'You can not by it';
}

console.log(canYouByIt1);


console.log(`you can${money >= cost ? ' ' : ' not '}by it`);
