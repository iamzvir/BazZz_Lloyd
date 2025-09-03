
/****** If Else Statement (с помощью этого оператора принимаются решения) ******/


// результаты которые будут использоваться в примерах ниже.
const age = 15;
const isAdult = age >= 18; // в isAdult у нас будет хранится булин значение true или false, в зависимости от значения в переменной age



// работа кода в фигурных скобках зависит от результата в круглых. Если в круглых скобках у нас true то код в фигурных скобках сработает, если false то код не сработает.
/*** оператор или statement - If () {} ***/


if (isAdult) {
   console.log('Вы можете купить бухло');
}

// что бы код в фигурных скобках срабатывал и при false используется оператор else {}
/*** оператор или statement - Else {} ***/

if (isAdult) {
   console.log('Вы можкте сходить на этот кинч');
} else {
   console.log('Вас не пустят на этот кинч');
}
// p.s когда в круглых скобках false, срабатывает то что записано в else


// в блоках с фигурными скобками можна делать и другие действия:
if (isAdult) {
   console.log('Вы можкте сходить на этот кинч');
} else {
   const yearsLeft = 18 - age; // вычесляем сколько лет между вашим возрастом и разрешающим порогом, и присвоение этого результата в yearsLeft
   console.log(`Вам еще рано такое смотреть, приходите через ${yearsLeft} года`);
}

// P.S Еще If Else Statement называют структурой контроля, так как эта структура позволяет контролировать блоки кода котороые должны запускаться тем или иным обрзом. Это дает больше контроля над работой кода:

// пример для лучшего понимания вышесказанного:

const birthYear = 2000;
const yearNow = 2020;
const myAge = yearNow - birthYear;

let answer;

if (myAge >= 18) {
   answer = 'Да'
} else {
   answer = 'Нет'
}

console.log(`Я взрослый? - ${answer}`);



/*** Множественный If Else Statement ***/
// Если вариантов много и каждый раз нужен разный, в зависимости от ситуации (тоесть у нас несколько условий):

const color = 'blue';

if (color === 'green') {
   console.log('Go!');
} else if (color === 'yellow') {
   console.log('Get Ready!')
} else if (color === 'red') {
   console.log('Stop!')
}

// Добавим в конце else {} для вывода результата, когда в переменной color нет подходящего варианта из предложенных в структуре If Else Statement.

if (color === 'green') {
   console.log('Go!');
} else if (color === 'yellow') {
   console.log('Get Ready!')
} else if (color === 'red') {
   console.log('Stop!')
} else {
   console.log('Incorrect color!');
}



