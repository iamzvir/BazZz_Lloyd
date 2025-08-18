// Функции. Declarations vs Expressions

// function declaration (можна вызвать из любого места в коде)
function age1(birthYear, nowYear) {
  return nowYear - birthYear;
}

const myAge = age1(1974, 2025);
console.log(myAge); // 51


// function expressions (можна вызвать только после того как она будет определена)

const age2 = function (birthYear, nowYear) {
  return nowYear - birthYear;
}
const myAge2 = age2(1980, 2025);
console.log(myAge2);
