
// 44. Методы объектов

// ф-ция записанная в обьекте - называется методом. (ф-ция calcAge будет методом обьекта youraObject)

'use strict'
{

  const youraObject = {
    name: 'YouRa',
    lastName: 'Allakhverdov',
    birthYear: 1974,
    job: 'programming instructor',
    familyMemebers: ['Irina', 'Michael', 'youRa'],
    hasDriverLicense: true,
    calcAge: function (birthYear) {
      return 2025 - birthYear;
    }
  }

  // спсобы вызова метода через дот и брекет нотейшэн
  console.log(youraObject.calcAge(1974));
  console.log(youraObject['calcAge'](1974));

}



{

  // this (ключевое слово)

  const youraObject = {
    name: 'YouRa',
    lastName: 'Allakhverdov',
    birthYear: 1974,
    job: 'programming instructor',
    familyMemebers: ['Irina', 'Michael', 'youRa'],
    hasDriverLicense: true,
    calcAge: function () {
      return 2025 - this.birthYear;
    }
  }
  console.log(youraObject.calcAge());

}

{

  const youraObject = {
    name: 'YouRa',
    lastName: 'Allakhverdov',
    birthYear: 1974,
    job: 'programming instructor',
    familyMemebers: ['Irina', 'Michael', 'youRa'],
    hasDriverLicense: true,
    calcAge: function () {
      this.age = 2025 - this.birthYear;
    }
  }
  youraObject.calcAge();

  console.log(youraObject.age);

  console.log(youraObject.age);
  console.log(youraObject);

}

{

  const youraObject = {
    name: 'YouRa',
    lastName: 'Allakhverdov',
    birthYear: 1974,
    job: 'programming instructor',
    familyMemebers: ['Irina', 'Michael', 'youRa'],
    hasDriverLicense: true,
    calcAge: function () {
      this.age = 2025 - this.birthYear;
      // return 2025 - this.birthYear
    },
    getSamery: function () {
      this.calcAge();
      console.log(`${this.name} is a ${this.age} - year old ${this.job} and he has ${this['hasDriverLicense'] ? 'a' : 'no'} driver license`)
    }
  }
  youraObject.getSamery();
}

