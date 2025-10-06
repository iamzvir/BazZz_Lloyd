

const celciusToKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celcius',
    // value: prompt('Temperature in Celcius: ') // закоментировано шоб не ебало мозК своим постоянным запросовым окном в браузере
    value: 35 // вместо того что было закоментпровано, а на строке 23 расписан баг для кода на строке 7
  }

  console.log(measurement.value);
  console.log('\n');
  console.log(measurement);


  const kelvin = measurement.value + 273;
  return kelvin
}

console.log(celciusToKelvin());


// ! P.S Если нам нужно получать из промта ЧИСЛО то используем Number():
// * Number(prompt('Temperature in Celcius: '))




// ! Что бы попасть в определенное место с воего кода в браузере - пишем в коде слово debugger;
{
  const celciusToKelvin = function () {
    const measurement = {
      type: 'temperature',
      unit: 'celcius',
      value: Number(prompt('Temperature in Celcius: '))
    }
    debugger; // ! 
    console.log(measurement.value);
    console.log('\n');
    console.log(measurement);


    const kelvin = measurement.value + 273;
    return alert(kelvin)
  }

  console.log(celciusToKelvin());
}
