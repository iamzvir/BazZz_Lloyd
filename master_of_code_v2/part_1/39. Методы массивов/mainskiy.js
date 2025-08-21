// 39. Методы массивов

const numbers = [23, 54, 4, 31];
let result;


// Svoystvo .lenght - vivodit kolichestvo elementov v massive;

// result = numbers.length; // 4

// Array.isArray()  - etot metod objecta Array proveryaet soderzhimoe v kruglih skobkah na sootvetstvie ili ne soostvetstvie massivu;

result = Array.isArray(numbers);

// Metod indexOf(11) - opredelyaet index elementa massiva numbers = 1 (eto index elementa);

result = numbers.indexOf(11); // 1

// Metod .push() - Dobavlyaet element v konce massiva, но! возвращает на экран полное колличество элементов масства

result = numbers.push(100);
console.log(numbers); // (5) [23, 54, 4, 31, 100]

console.log(result); // 5

// Metod .pop() - Ubiraet posledniy element и показывает какой элемент убран
result = numbers.pop();
console.log(numbers);  // (4) [23, 54, 4, 31]

result = numbers.pop();
console.log(numbers);  // (3) [23, 54, 4]

// Metod .unshift() - dobavlyaet element massiva v na4alo massiva i vivodit kolichestvo elementov;
result = numbers.unshift(777);
console.log(numbers); // (4) [777, 23, 54, 4]

// Metod .shift() - ubiraet element massiva v na4ale massiva i vivodit kolichestvo elementov;
result = numbers.shift();
console.log(numbers); // (3) [23, 54, 4]

// Metodom .push() i .unshift() mozhno dobavlyat` neskol`ko elementov cherezZz  ","
result = numbers.push(11, 22, 33);
console.log(numbers); // (6)[23, 54, 4, 1, 2, 3]
result = numbers.unshift(3, 2, 1);
console.log(numbers); // (9) [3, 2, 1, 23, 54, 4, 1, 2, 3]

// Metod .splice() pozvolyaet udalit` element massiva s ukazaniem ego indexa i kolichestva elementov
result = numbers.splice(3, 3); // (3) [23, 54, 4]

// Metod .reverse - pozvolyaet razvernut` elementi v massive v obratnom poryadke
result = numbers.reverse();

// Metod .slice pozvolyaet virezat` chast` elementov massiva s ukazaniem indexa nachal`nogo i konechnogo elementa do kotorogo nuzhno virezat`
result = numbers.slice(1, 4);

console.log(numbers); // (6) [33, 22, 11, 1, 2, 3] -  posle metoda .slice() massiv ne menyaetsa

console.log(result); // (3)[22, 11, 1] - elementi kotorie bili virezani

// Metod .concat() - obedenit` neskol`ko massivov v odin

const firstArr = [25, false, {}, 58];
const secondArr = [true, 'Yurobas', 'Thyis is now', 235];

result = firstArr.concat(secondArr, numbers, result);
console.log(result);
































