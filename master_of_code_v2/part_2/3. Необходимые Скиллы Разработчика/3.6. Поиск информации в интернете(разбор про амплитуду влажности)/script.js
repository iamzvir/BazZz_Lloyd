'use strict'

// Problem 1
// We work on weather forecast app, specifically on humidity feature for now. The most recent task is: "Calculate the humidity amplitude for given array of humidities for one day. Note, that sometimes there can be an error in data, caused by sensor error."

const humik = [32, 45, 29, 19, 'error', 58, 71, 47, 33, true, 42, 51, 49];

// 1. Understand the problem
// - What is humidity amplitude? This is the difference between min and max values of humidity

// - How to calculate min and max values in array?
// - What to do with this error? (ignored this)


// 2. Divide into sup-problems
// - How to ignore data errors?
// - How to calculate min values in array?
// - How to calculate max values in array?
// - Subtract min from max and return the result

const calculateHumiditiesAmplitude = function (humidities) {
  let max = humidities[0];
  let min = humidities[0];

  for (let i = 1; i < humidities.length; i++) {
    const currentHumidities = humidities[i];
    if (typeof currentHumidities !== 'number') continue;

    if (currentHumidities > max) {
      max = currentHumidities;
    }
    if (currentHumidities < min) {
      min = currentHumidities;
    }
  }

  console.log(max, min);
  return max - min;
}

const amplitude = calculateHumiditiesAmplitude(humik);

console.log(amplitude);
console.log('\n');


// Problem 2

// 1. Understand the problem
// The function should get two arrays of humidities as parameters

// - Should we implement the same functionality for second array? - No, we should merge two arrays



// 2. Divide into sup-problems

// - How to marge 2 arrays

const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {
  const humidities = h1.concat(h2);
  console.log(humidities);

  let max = humidities[0];
  let min = humidities[0];

  for (let i = 1; i < humidities.length; i++) {
    const currentHumidities = humidities[i];
    if (typeof currentHumidities !== 'number') continue;

    if (currentHumidities > max) {
      max = currentHumidities;
    }
    if (currentHumidities < min) {
      min = currentHumidities;
    }
  }

  console.log(max, min);
  return max - min;
}

const amplitude1 = calculateHumiditiesAmplitudeTwoArrays([1, 20, 50], [23, 48, 78]);

console.log(amplitude1);