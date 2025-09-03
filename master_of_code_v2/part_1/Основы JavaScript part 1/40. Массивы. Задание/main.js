// задание массивы



// 1.Создайте стрелочную функцию calculateTips(), которая принимает параметр счёта и возвращает соответствующие чаевые.
const calculateTips = (bill) => bill < 20 ? bill * 0.2 : bill * 0.15;


// 2.Создайте массив счетов с тестовыми данными ниже.
const total = [11, 20, 47];


// 3.Создайте массив чаевых для каждого счёта.
const totalBills = [calculateTips(total[0]), calculateTips(total[1]), calculateTips(total[2])];




// 4.Создайте массив общих сумм счетов, то есть счёт + чаевые.

const totalSumm = [total[0] + totalBills[0], total[1] + totalBills[1], total[2] + totalBills[2]];

console.log(totalSumm); // [ 13.2, 23, 54.05 ]
