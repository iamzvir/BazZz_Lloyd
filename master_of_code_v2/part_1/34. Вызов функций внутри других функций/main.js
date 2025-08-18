// 34. Вызов функций внутри других функций

'use strict'

//

function colorMixer(color1, color2) {
  const newColor = `${color1} + ${color2}`
  return newColor;
}

function colorizer(item, color1, color2) {
  const color = colorMixer(color1, color2);
  const colorizedItem = `The ${item} is ${color}.`;
  return colorizedItem;
}
console.log(colorizer('car', 'red', 'green'));

const colorizedCar = colorizer('house', 'white', 'black');
console.log(colorizedCar);


