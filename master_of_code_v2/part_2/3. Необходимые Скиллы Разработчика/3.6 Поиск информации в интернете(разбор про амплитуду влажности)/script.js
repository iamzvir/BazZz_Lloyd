// Поиск информации в интернете(разбор про амплитуду влажности)

const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];


// #1 Amplituda с передачей одного массива
{
  const calculateHumiditiesAmplitude = function (humik) {

    let max = humik[0];
    let min = humik[0];

    for (let i = 1; i < humik.length; i++) {
      const currentHumik = humik[i];

      if (typeof currentHumik !== 'number') continue;

      if (currentHumik > max) {
        max = currentHumik;
      }
      if (currentHumik < min) {
        min = currentHumik;
      }
    }

    console.log(max, min);

    return max - min; // узнаем Amplitudu
  }

  const amplituda = calculateHumiditiesAmplitude(humidities);

  console.log(amplituda);

}

console.log('\n');

// #2 Amplituda с передачей двух массивов с дальнейшим их соединением в один.

{
  const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {
    const humik = h1.concat(h2);

    let max = humik[0];
    let min = humik[0];

    for (let i = 1; i < humik.length; i++) {
      const currentHumik = humik[i];

      if (typeof currentHumik !== 'number') continue;

      if (currentHumik > max) {
        max = currentHumik;
      }
      if (currentHumik < min) {
        min = currentHumik;
      }
    }

    console.log(max, min);

    return max - min; // узнаем Amplitudu
  }

  const amplituda = calculateHumiditiesAmplitudeTwoArrays([2, 5, 7], [6, 4, 2]);

  console.log(amplituda);


}