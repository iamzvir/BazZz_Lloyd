// 33. Стрелочные функции (arrow functions)

'use strict'
// function expression
const getAge = function (birthYear, nowYear) {
  return nowYear - birthYear;
}

const myAge = getAge(1980, 2025);
console.log(myAge); // 45

// arrow function
const getAge1 = (birthYear, nowYear) => nowYear - birthYear;

const myAge1 = getAge1(1977, 2025);
console.log(myAge1); // 48


// использование return в стрелочной ф-ции (когда там написано кода, больше чем одна строка и используется больше одной переменной):
const moguIamBuy = (birthYear, nowYear) => {
  const age = nowYear - birthYear;
  const use = age >= 21 ? true : false;
  return use;
}
console.log(moguIamBuy(1977, 2025));

