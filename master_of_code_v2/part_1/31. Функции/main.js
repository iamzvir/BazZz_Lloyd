// Function

function printText() {
  x = 2 + 2;
  return console.log(x);
}

printText(); // 4

printText(); // 4

/*
function total(weight, height) {
  result = weight / Math.pow(height, 2);
  return alert(`Ваш индекс массы тела ${result}`);
}

total(80, 1.83);
*/


/*
// передаем аргументы при вызове ф-ции в ее параметры параметры:
function colorizer(predmet, tsvet) {
  console.log(predmet, tsvet);
  const colorizedItem = `Эта ${predmet} будет ${tsvet}`;
  console.log(colorizedItem);
}


// передаем аргументы 'desk' и 'red' в вызове ф-ции для в ее параметры (predmet, tsvet) 
colorizer('desk', 'red'); // desk red
colorizer('доска', 'красная'); // Эта доска будет красная
*/



// описание шо тут и куда в файле "наскальная надпись.png"
function colorizer(item, color, colorCode) {
  const colorizedItem = `The ${item} is ${color}. The code is the color is ${colorCode}.`;
  return colorizedItem;
}

const message = colorizer('desk', 'red', 99);
console.log(`We have the following message: ${message}`); // We have the following message: The desk is red. The code is the color is 99.

// тот же варик только другие аргументы
const message1 = colorizer('hand', 'rules', 585);
console.log(`We have the following message: ${message1}`);