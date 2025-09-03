
// 45. Объекты. Задание


{
  // 1. У нас есть два друга — Джек и Майк. Для каждого из них создать объект со свойствами: имя, фамилия, вес и рост(Jack White и Mike Black).

  const Jack = {
    firstName: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.70
  };

  const Mike = {
    firstName: 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93
  };
}


{
  // 2. Создать для каждого объекта метод расчёта ИМТ, который вычисляет ИМТ (один и тот же метод для обоих объектов).

  const Jack = {
    firstName: 'Jack',
    lastName: 'White',
    weight: 91,
    height: 1.93,
    bmi: function () {
      this.bmi = this.weight / this.height ** 2;
      return this.bmi;
    }
  };
  Jack.bmi();

  const Mike = {
    firstName: 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93,
    bmi: function () {
      this.bmi = this.weight / Math.pow(this.height, 2);
      return this.bmi;
    }
  };
  Mike.bmi();


  // 3. Вывести в консоль, у кого ИМТ выше, также полное имя и соответствующее значение ИМТ.Пример: «Jack White ИМТ(25.7) выше, чем Mike Black(22.4)!»

  if (Jack.bmi > Mike.bmi) {
    console.log(`${Jack.firstName} ${Jack.lastName} ИМТ (${Jack.bmi}) выше, чем ${Mike.firstName} ${Mike.lastName} (${Mike.bmiMike})!`);

  } else if (Mike.bmi > Jack.bmi) {
    console.log(`${Mike.firstName} ${Mike.lastName} ИМТ (${Mike.bmi}) выше, чем ${Jack.firstName} ${Jack.lastName} (${Jack.bmiJack})!`);

  } else {
    console.log(`BMI ${Jack.firstName} (${Jack.bmi}) и ${Mike.firstName} (${Mike.bmi}) равны`);
  }
}

