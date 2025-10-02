'use strict'
// 1. Создайте массив bills, содержащий все 10 тестовых значений счетов.
// test data: [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57].

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

// 2. Create empty arrays for the tips and the totals (tips(чаевые) and totals(итого))
const tips = [];
const totals = [];

// 3. Стрелочная функцию calculateTips(), которая принимает параметр счет(bills) и возвращает соответствующие чаевые(tips)
const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.2;

// 4. С помощью цикла for заполнить пустые массивы (чаевые и иотго)
for (let i = 0; i < bills.length; i++) {
  tips.push(calculateTips(bills[i]));
  totals.push(bills[i] + tips[i]);
}

let sum = 0;

const caclculateAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

console.log(caclculateAverage(totals));







