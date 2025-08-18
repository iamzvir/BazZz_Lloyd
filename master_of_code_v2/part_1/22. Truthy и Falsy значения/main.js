
/*** Концепция правдивых и ложных значений ***/


/*** falsy values *** Значения которые при конвертации их в булин возвращают - false (в JS таких значений 5): ***/
// 0, '', undefined, null, NaN

// при приведении к булевому типу, будет возвращено значение - false
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));


/*** truthy values ***/
// все остальное что не равно выше указанным пяти значениям, будет иметь truthy values.
console.log(Boolean(5));
console.log(Boolean('fgfgh'));
console.log(Boolean({ user: 'Lloyd', age: 80 }));
console.log(Boolean(['red', 'green', 'blue']));
console.log(Boolean(35.58));


/*** Не явное приведение типов в if else statement ***/

// в круглых скобках if else () происходит конвертация значений находящихся переменной что там указана в булевый тип:

const age = 0;

if (age) {
   console.log('ты черпак'); // если true
} else {
   console.log('ты дух') // если false
}


let andrew;

if (andrew) {
   console.log('не ставит zoom и вообще он "троль"');
} else {
   console.log('Вы все козлы, Андрюха молодец, завтра он установит zoom и огогого бля!');
}

let weight;

if (weight) {
   console.log('weight is defined');
} else {
   console.log('weight is not defined'); // так как у нас переменная не определена а это - false, тогда результатом будет вывод из else.
}

// P.S Но даже если мы присвоим переменной weight значение 0, то результат не измениться, он по прежнему будет false, решение этого бага в следующем уроке. 