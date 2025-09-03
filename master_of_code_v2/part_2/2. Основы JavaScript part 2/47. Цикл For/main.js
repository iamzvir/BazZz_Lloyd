
// 47. Цикл For

console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');
console.log('Push ups repetition 1');


// тоже самое только с помощью цикла for()

// цикл for() состоит из трех частей: 1 - начальное значение счетчика, 2 - условие которое проверяется ДО следующего шага цикла, 3 - увеличение или уменьшение счетчка для выполнения условия из второй части цикла. 

for (let rep = 1; rep <= 10; rep = rep + 1) {
  console.log('Push ups repetition 1'); // строка 'Push ups repetition 1' будет выведена 10 раз подряд.
}


for (let rep = 1; rep <= 10; rep++) {
  console.log('Push ups repetition ' + rep); // строка 'Push ups repetition' будет выведена c нумерацией от 1 до 10.
}

// Выведите в консоль числа от 1 до 20.

for (i = 1; i <= 20; i++) {
  console.log(i);

}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);

}

console.log('\n');


// Выведите в консоль сумму всех чисел от 1 до 10. В конце должно появиться только одно число — сама сумма.

let sum = 0;
for (i = 1; i <= 100; i++) {
  sum = sum + i;

}

console.log(sum); // 5050

// Создайте массив из 10 любых чисел. С помощью цикла for найдите и выведите в консоль максимальное число из этого массива.

const Andrew = [100, 8, 9, 52, 45, 87, 121, 23, 62, 6];


let max = Andrew[0];
// Найдём максимальное число:
for (i = 1; i <= Andrew.length; i++) {
  if (Andrew[i] > max) {
    max = Andrew[i];
  }
}

console.log(max); // 121
