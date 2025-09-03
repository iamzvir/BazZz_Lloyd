// 30.07.2025
/************* операторы СРАВНЕНИЯ ***************/
// > или <
let x = 5;
let y = 7;

let yakasHuynya = x > y;
console.log(yakasHuynya); // будет результат сравнения икса с игриком, тоесть булин значение тру или фолс.


// >= <=
console.log(x >= 6);
console.log(y <= 9);




// != проверка на не равенство (если x = 10 y = 1) x != y будет тру
console.log(x != y) // false


// !== строгая проверка на не равенство (если x = 5 y = 5) будет фолс
x = 5;
y = 5;
console.log(x !== y) // false


// == проверка на равенство (если x = 10 y = '10') x == y будет тру (проверяет только значения).
x = 10;
y = '10';
console.log(x == y) // true


// === строгая проверка на равенство (если x = 10 y = '10') x == y будет false (проверяет на равенство не только значения, но и их типы)
x = 10;
y = '10';
console.log(x === y) // false

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false



