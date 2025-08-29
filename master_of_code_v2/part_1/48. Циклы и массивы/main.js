'use strict'
// 48. Циклы и массивы. Перебирание элементов массивов с помощью цикла for()

const user123 = ['YouRa', 'Alkoholev', 1974, 'developer', ['Loh', 'Pidr'], true];


// оператор присваивания =
const types = [];

for (let i = 0; i < user123.length; i++) {
  types[i] = typeof user123[i]; // наполняем массив с помощью рператора присваивания =
}
console.log(types);



// метод push()
const newTypes = [];

for (let i = 0; i < user123.length; i++) {

  newTypes.push(typeof user123[i]); // наполняем массив с помощью метода push()
}
console.log(newTypes);

const birthYears = [1977, 1980, 1979, 1969];

const age = [];
const age2 = [];

for (let i = 0; i < birthYears.length; i++) {
  age[i] = 2025 - birthYears[i];
  age2.push(2025 - birthYears[i]);
}

console.log(age, age2);
