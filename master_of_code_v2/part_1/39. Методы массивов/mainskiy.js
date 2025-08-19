// 39. Методы массивов

let numbers = [23, 3, 54, 6];

let result;
// Uznaem kolichestvo elementov massiva numbers cherez svoistvo .length s pomoschu peremennoy result
result = numbers.length; // 5
// Proverka soderzhimogo peremennoy numbers na sootvetstvie tipu dannih Array

numbers = "ghbdtn"; // изменил перемееную с массива на строку

// проверка переменной numbers на массив или не массив.
result = Array.isArray(numbers); // false (в данный момент она не массив а строка)

// это то же самое если сделать отак:
console.log(numbers); // ghbdtn (но здесь нужно самому додумывать, что если значение не в квдратных скобках, значит это не массив)

// можна еще отак:
console.log(typeof numbers); // string (понятно что это не массив а строка)

















console.log(result);









