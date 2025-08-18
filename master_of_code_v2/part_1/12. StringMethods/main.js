// String Methods

// Конкатенация строк (соединение)
console.log('Jack' + ' ' + 'Gorobets'); // Jack Gorobets


// Конкатенация переменных
const firstName = 'Jack';
const lastName = 'Gorobets';
const age = 800;
const greeting = 'Hello World!';
const testString = 'Hello lol';
const probelSpace = ' ';
const longString = 'If you want to be okay, facking teacher every day!';

console.log(firstName + probelSpace + lastName); // Jack Gorobets


// Escaping \ (Экранирование)
console.log('I\'m 800 years old'); // I'm 800 years old

console.log("I like \"Terminator\" movie"); // I like "Terminator" movie


// Свойства и методы строк

// 1. Length (свойство строки length указывающее длину строки. При вводе свойств круглые скобки не указываются)
console.log('Свойство length в строке \'Hello\' выведет количество символов - ' + 'Hello'.length); // 5
console.log('Свойство length в переменной \'firstName\' выведет количество символов - ' + firstName.length); // 4

// 2. concat() этот метод заменяет знак +
console.log(firstName.concat(probelSpace, lastName)); // Jack Gorobets
console.log(greeting.concat(probelSpace, 'My name is', probelSpace, firstName, probelSpace, lastName)); // Hello World! My name is Jack Gorobets


// 3. toUpperCase() этот метод меняет строку в переменной firstName на большие буквы
console.log(firstName.toUpperCase()); // JACK


// 4. toLowerCase() этот метод меняет строку в переменной firstName на маленькие буквы
console.log(firstName.toLowerCase()); // jack


// 5. Обращение к символам строк по их индексу (обращение к строкам как к массмивам, по индексу)
console.log(firstName[0]); // J
console.log(firstName[1]); // a
console.log(firstName[2]); // c
console.log(firstName[3]); // k


// 6. indexOf() этот метод показывает индекс, по которому расположен тот или иной символ в строке
console.log(firstName.indexOf('J')); // 0 (символ 'J' имеет нулевой индекс в строке 'Jack')
console.log(greeting.indexOf('l')); // 2 (под индексом 2, показало первый из имеющихся одинаковых символов 'l')

// 6.1 lastIndexOf() этот метод показывает индекс, ПОСЛЕДНЕГО из нескольких одинаковых символов в строке
console.log(greeting.lastIndexOf('l')); // 9 (под индексом 9, показало последний из имеющихся одинаковых символов 'l' в 'Hello World!')

// 6.2  проверяет не только один символ, но и несколько рядом стоящих
console.log(testString.indexOf('lo')); // 3 (под индексом 3, показало ПЕРВУЮ из имеющихся одинаковых символьных последовательностей 'lo' в строке 'Hello lol')

// 6.3 так же можем проверить последние рядом стоящие символьные последовательности
console.log(testString.lastIndexOf('lo')); // 6 (под индексом 6, показало ПОСЛЕДНЮЮ из имеющихся одинаковых символьных последовательностей 'lo' в строке 'Hello lol')

// 6.4 Все остальные символы которых нет в имеющейся строке будут показывать -1
console.log(testString.indexOf('z')); // -1 (значение -1 выдается если символ не найдет)


// 7. charAt() указав индекс получаем символ из строки, который соответствует номеру указанного индекса
console.log(greeting.charAt(0)); // H

// 7.1 charAt() и свойство length  (получение последнего символа в строке) 
console.log(greeting.charAt(greeting.length - 1)); // ! (! - это последний символ в строке 'Hello World!')


// 8. substring() этот метод извлекает из строки какую то ее часть (певый параметр в круглых скобках укажет символ с которого начнется, а второй укажет на тот, ДО которого будет извлечена эта часть строки)
console.log(lastName.substring(1, 6)); // orobe ('Gorobets' тоесть извлеклось 5 символов что находятся от 1го включительно и ДО 6го не включительно)


// 9. slice() извлекает простым способом последние символы в строках, так же делает тоже что и выше указанный метод substring(), а так же позволяет обращаться со строками как с массивами.
console.log(lastName.slice(1, 6)); // orobe (делает тоже что и метод substring())
console.log(lastName.slice(-5)); // obets (последние 5 символов из строки 'Gorobets')


// 10. split() этот метод разделяет строку на несколько частей (строк) с помощью разделителя, который указывается в качестве параметра в круглых скобках (split - зазделить)
console.log(longString.split(' ')); //  ['If', 'you', 'want', 'to', 'be', 'okay,', 'facking', 'teacher', 'every', 'day!'] 

// Выше произошло создание массива с разбитием предложения на отдельные строки. Пример где это може пригодиться:
const colors = 'red, orange, green, blue';
console.log(colors.split(',')); // [ 'red', ' orange', ' green', ' blue' ] получаем массив с цветами из обычной строки.


// 11. replace() этот метод заменяет одну строку на другую (первой указываем ту строку которую хотим заменить, а второй, на какую хотим заменить) (replace - заменить)
console.log(colors.replace('blue', 'yellow')); // 'red, orange, green, yellow'


// 12. includes() этот метод возвращает булин значение, можно проверять наличие того или иного значения в переменной. (includes - включает)
console.log(colors.includes('blue')); // true (проверили содержится ли строка 'blue' в переменной colors)
