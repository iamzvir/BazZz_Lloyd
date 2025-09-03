
'use strict'

// 49. Break & Continue

const user123 = ['YouRa', 'Alkoholov', 1974, 'developer', ['Pidr', 'Loh'], false];

// 1. continue - цикл работает пока в условии будет встречаться true

for (let i = 0; i < user123.length; i++) {

  // continue - перебирает весь массив, но выводит результат согласно указанному условию в if() 
  if (typeof user123[i] !== 'string') continue;

  console.log(user123[i], typeof user123[i]); // 'YouRa' string, 'Alkoholov' string, 'developer' string
}

console.log('\n');

// 2. break - сразу выходит из цикла если в указанном условии в if() получается - true.

for (let i = 0; i < user123.length; i++) {

  // интерпретатор выводит элементы любых типов, а когда натыкается на число, выходит из цикла.
  if (typeof user123[i] === 'number') break;

  console.log(user123[i], typeof user123[i]); // 'YouRa' string, 'Alkoholov' string
}


// YouRa gonit bessa bitch mather fuck off! 
