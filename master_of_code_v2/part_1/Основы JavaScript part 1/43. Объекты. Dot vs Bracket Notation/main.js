// 43. Объекты. Dot vs Bracket Notation
'use strict'

// Обращение к значению свойства обьекта через точку (dot)
const myData = {
  firstName: 'Andrew',
  lastName: 'Kapronoff',
  birthYear: 1977,
  job: 'promming instructor',
  familyMember: ['Nadezhda', 'Tatiana']
};

console.log(myData.firstName); // 'Andrew'


// Обращение к значению свойства обьекта через квадратные скобки [] и внутри свойство обьекта пишем в кавычках
console.log(myData['firstName']); // 'Andrew'

// Исползование квадратных кавычек дает возможность менять значение свойства обьекта, при помощи expression (делать какое то вычесление):
const year = 'Year'
console.log(myData['birth' + year]); // 1977


// доступ к значению свойств обьекта через UI (юзерИнтерфэйс):
// const snagets = prompt('What do you want to know about YouRa? Choose between firstName, lastName, birthYear, job, familyMember');

// console.log(myData[snagets]); // в квадратных кавычах у нас добавлено expression (выпвжение)
// P.S выражением считается действие - которое всегда возвращает значение


// if (myData[snagets]) {
//   console.log(myData[snagets]);
// } else {
//   console.log('This properties does not exist');
// }


// Создание нового свойства в существующий обьект myData:
myData.location = 'Ukraine';

console.log(myData);


// Создание нового свойства и присвоения ему значения в существующий обьект myData:
myData['telegram'] = '@AndrewShand';

console.log(myData);

// через переменную viber создаем новое свойство Viber_bot со знчением ZiLeboBa
const viber = 'Viber_bot';
myData['Viber_bot'] = 'ZiLeboBa';

console.log(myData);

// Challeng - 'Andrew has 2 family members and thee first one is Nadezhda'
console.log(`${myData.firstName} has ${myData.familyMember.length} family members and the first one is ${myData.familyMember[0]}`);
