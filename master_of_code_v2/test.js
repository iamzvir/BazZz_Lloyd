function printHumiditiesForecast(arr) {
  const forecastStr =
    '... ' +
    arr
      .map((humidity, i) => `${humidity}% влажности за ${i + 1} день`)
      .join(' ... ') +
    ' ...';

  console.log(forecastStr);
}

// Тестовые данные:
const data1 = [49, 51, 63, 100];
const data2 = [31, 29, 43, 58, 52];

printHumiditiesForecast(data1);
printHumiditiesForecast(data2);