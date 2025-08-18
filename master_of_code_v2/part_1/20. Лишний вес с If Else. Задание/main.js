// Лишний вес с If Else. Задание

const weight = prompt('Enter your weight in kilograms');
const height = prompt('Enter your height in meters');

const indexBmi = weight / Math.pow(height, 2);

const overWeight = indexBmi - 25;

if (indexBmi >= 25) {
  console.log(`Вы жирный на::: ${overWeight}`);
  alert(`Вы жирный на::: ${overWeight}`);
} else {
  console.log('Не жирный');
  alert('Не жирный');
};

