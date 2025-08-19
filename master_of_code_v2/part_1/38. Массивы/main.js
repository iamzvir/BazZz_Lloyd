// Массивы

'use srict'

const color1 = 'red';
const color2 = 'orange';
const color3 = 'green';
const color4 = 'blue';
const color5 = 'indigo';
const color6 = 'veolet';
const color7 = 'black';

// Создаём массив. Каждому элементу массива присвоен порядковый номер - начиная с "0"

const rainbowColor = ['red', 'orange', 'green', 'blue', 'indigo', 'veolet', 'black'];


console.log('The sky is ' + rainbowColor[3]); // The sky is blue

// меняем элемент массива через команду
rainbowColor[1] = 'pisun';
// хотим добавить в конец массива новый элемент, для этого используем свойство .length

rainbowColor[rainbowColor.length] = 'adzip';
// console.log(rainbowColor); // ['red', 'orange', 'green', 'blue', 'indigo', 'veolet', 'black']


// Создание пустого массива. Добавление элементов в пустой массив

// const stringNumber = [];  // Pustoy massiv

// stringNumber[0] = 1;
// stringNumber[1] = true;
// stringNumber[2] = { user: 'Andrew', lestuser: 'BazZz', logius: ['adzip', 'piska', 'driska', 'zakidushka'] };
// stringNumber[3] = NaN;

// Sozdaem massiv s primeneniem funkcii new Array();

const pigg = new Array('one', 'two', 'three');
const pigg1 = [1, 2, 3, new Date()];



console.log(pigg, pigg1);


