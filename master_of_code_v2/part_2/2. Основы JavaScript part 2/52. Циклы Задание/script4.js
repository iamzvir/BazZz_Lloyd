
// 1. Создайте массив bills(счета), содержащий все 10 тестовых значений счетов.
const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

// 2. Создайте пустые массивы для чаевых и итогов.
const tips = [];
const total = [];

// 3. Используйте функцию calculateTips() чтобы вычислить чаевые. Итоговые значения (totals) это чаевые + счет.

const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;


// 3.1 С помощью цикла for заполните пустые массивы.

for (let i = 0; i < bills.length; i++) {
  tips.push(calculateTips(bills[i]));
  total.push(bills[i] + tips[i])
}

console.log(total);

// ! доп зад со *



const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return sum / arr.length;
}

console.log(calculateAverage(total));