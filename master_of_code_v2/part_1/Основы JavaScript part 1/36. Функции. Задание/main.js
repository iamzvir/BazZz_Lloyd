// Функции. ДЗ


// 1.	Создайте стрелочную функцию getAverage для вычисления средних продаж в месяц за квартал.

const getAverage = (x, y, z) => (x + y + z) / 3;



// 2.	Используйте функцию getAverage, чтобы вычислить средние значения для каждого отдела.

const otdel1Kvart1 = getAverage(35467, 120842, 38501); // 34603.333333333336
const otdel2Kvart1 = getAverage(70533, 50121, 33899); // 51517.666666666664


const otdel1Kvart2 = getAverage(50301, 21984, 19207); // 30497.333333333332
const otdel2Kvart2 = getAverage(72381, 41562, 29465); // 47802.666666666664

console.log(otdel1Kvart1, otdel2Kvart1, otdel1Kvart2, otdel2Kvart2);



// 3.1 Создайте функцию printBonus, которая принимает средние продажи каждого отдела в качестве параметров: printBonus(dept1AverSales, dept2AverSales).

// 3.2 Если продажи одного отдела как минимум на 30% выше, чем у другого, функция должна вычислить бонус для победителя в процентах этой разницы и вывести это в консоль.

function printBonus(otdel1AverSales, otdel2AverSales) {
  if (otdel1AverSales > otdel2AverSales) {
    diff = otdel1AverSales - otdel2AverSales;
    percent = diff / otdel2AverSales * 100;
    if (percent > 30) {
      console.log(`отдел 1 получит бонус ${percent}%`)
    } else {
      console.log('У отдела 1 нет бонусов');
    }
  } else if (otdel2AverSales > otdel1AverSales) {
    diff = otdel2AverSales - otdel1AverSales;
    percent = diff / otdel1AverSales * 100;
    if (percent > 30) {
      console.log(`отдел 2 получит бонус ${percent}%`)
    } else {
      console.log('У отдела 1 нет бонусов');
    }
  } else {
    console.log('Бонусов нет ни у кого');
  }
}


printBonus(otdel1Kvart1, otdel2Kvart1);
printBonus(otdel1Kvart2, otdel2Kvart2);



function printBonus1(otdel1AverSales, otdel2AverSales) {
  if (otdel1AverSales > otdel2AverSales && otdel1AverSales > 1.3 * otdel2AverSales) {
    diff = otdel1AverSales - otdel2AverSales;
    percent = diff / otdel2AverSales * 100;

    console.log(`отдел 1 получит бонус ${percent}%`)

  } else if (otdel2AverSales > otdel1AverSales && otdel2AverSales > 1.3 * otdel1AverSales) {
    diff = otdel2AverSales - otdel1AverSales;
    percent = diff / otdel1AverSales * 100;

    console.log(`отдел 2 получит бонус ${percent}%`)

  } else {
    console.log('Бонусов нет ни у кого');
  }
}

printBonus1(otdel1Kvart1, otdel2Kvart1);
printBonus1(otdel1Kvart2, otdel2Kvart2);