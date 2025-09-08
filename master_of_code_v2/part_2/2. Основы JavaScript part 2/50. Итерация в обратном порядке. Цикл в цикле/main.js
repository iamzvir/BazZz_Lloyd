

// 50. Итерация в обратном порядке и цикл в цикле.

const user123 = ['YouRa', 'Alkoholov', 1974, 'developer', ['Pidr', 'Loh'], false];

// 1. Итерация в обратном порядке
for (let i = user123.length - 1; i >= 0; i--) {
  console.log(user123[i]);
}

// 2. Цикл в цикл
for (let vprava = 1; vprava <= 3; vprava++) {
  console.log(`vprava #${vprava}`);

  for (let repenko = 1; repenko <= 5; repenko++) {
    console.log(`   repenko ${repenko}`);
  }
}

// Практика:

// Вывести массив имён в обратном порядке
// Подсказка: начните с индекса arr.length - 1 и идите к 0.

const names = ['Andrew', 'BazZz', 'Lloyd', 'Alex', 'Marta'];
for (let q = names.length - 1; q >= 0; q--) {
  console.log(names[q]);
}

// Вывести символы строки в обратном порядке
// Подсказка: строки тоже индексируем через[i].
const s = 'JavaScript';

for (let i = s.length - 1; i >= 0; i--) {
  console.log(s[i]);

}

// Сумма элементов массива, но итерируя в обратном порядке
// Подсказка: начните sum = 0; добавляйте элементы в цикле с i = length - 1.

const nums = [5, 11, 3, 8, 2];
let sum = 0;
for (let i = nums.length - 1; i >= 0; i--) {
  sum += nums[i];
}

console.log(sum); // 29
console.log('\n');

/* неправильное реешение
// Удалить из массива (splice) все отрицательные числа, итерируя в обратном порядке
// Подсказка: при удалении элементов безопасно идти с конца, чтобы индексы не смещались.

const arr = [3, -1, 5, -7, 0, -2, 8];

for (let i = arr.length - 1; i >= 0; i -= 2) {
  console.log(arr[i]);

}
*/

// правильное решение

const arr = [3, -1, 5, -7, 0, -2, 8];

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] < 0) {
    arr.splice(i, 1);
  }
}

console.log(arr); // [3, 5, 0, 8]


// Таблица умножения 1..5 (вложенные циклы)
// Подсказка: внешний цикл по i, внутренний по j, выводить i x j = result.


for (let i = 1; i <= 10; i++) {
  console.log(`умножение на ${i}`);


  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }


}


// Пройти по матрице (2D массив) и вывести каждый элемент с координатами [i][j]
// Подсказка: вложенный цикл, используйте matrix[i][j]. Вывести "row i col j -> value"

const matrix = [['петя', 'vasya', 'mikluha'], ['mcFly', 'Joel', 'Erni'], ['Pidr', 'loh', 'Shand']];
console.log(matrix.length); // 3


// matrix.length равен 3, это число строк (rows)
for (let i = 0; i < matrix.length; i++) {

  // matrix[i].length равен 3, это число столбцов строке (columns)
  for (let j = 0; j < matrix[i].length; j++) {

    console.log(`строка ${i} столбец ${j} -> ${matrix[i][j]}`)
  }
}

