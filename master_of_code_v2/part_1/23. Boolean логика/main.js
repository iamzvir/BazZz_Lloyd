// boolean операторы ....//

// Логические операторы "И" "Или" "Нет" (AND, OR, NOT)

// AND && (Трушка когда оба трушки элсе флюшки)
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false


// const yuricHasMoney = false;
// const yuricAdult = true;
// if (yuricHasMoney && yuricAdult) {
//    console.log('prodam vodyaru');
// } else {
//    console.log('No prodavat vodku');
// }


// OR || (Если хоть один из операндов будет тру - итог будет труе)

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // ture
// console.log(false || false); // false

// const yuricHasMoney = true;
// const yuricAdult = false;
// if (yuricHasMoney || yuricAdult) {
//    console.log('prodam vodyaru');
// } else {
//    console.log('No prodavat vodku');
// }


// NOT !

// console.log(!true); // false
// console.log(!false); // true


const yuricHasMoney = true;
const yuricAdult = true;
const yuricDrebodan = false;
if (yuricHasMoney && yuricAdult && !yuricDrebodan) {
  console.log('prodam vodyaru');
} else {
  console.log('No prodavat vodku');
}

