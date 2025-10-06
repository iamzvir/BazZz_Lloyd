
// let text; из за этого было в начале undefined
let text = ''; // правильная запись

const printHumiditiesForecast = function (array) {

  for (let i = 0; i < array.length; i++) {
    text = text + `… влажность ${array[i]}% за ${i + 1} день…`; // и тут я не дописал text +
  }

  return text;

}

printHumiditiesForecast([31, 29, 43, 58, 52]);

console.log(text);