
/** решение задания **/
const bill = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

const tips = [];
const totals = [];

const calculateTips = bills => bills < 20 ? bills * 0.2 : bills * 0.15;

for (i = 0; i < bill.length; i++) {
  tips.push(calculateTips(bill[i]));
  totals.push(bill[i] + tips[i]);
}

console.log(`Bill ${bill}\n \nTips ${tips}\n \nTotals ${totals}`);
console.log('\n');




/** решеие доп. задания **/
const caclculateAverage = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}


console.log(caclculateAverage(totals));

