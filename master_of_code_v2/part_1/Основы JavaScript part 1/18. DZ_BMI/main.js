// BMI

const weight = prompt('Введите ваш вес в кг');
const height = prompt('Введите ваш рост в метрах');
const myBMI = weight / Math.pow(height, 2);

const indexBmi = myBMI >= 25;
alert(`Есть ли у вас лишний вес? ${indexBmi}`);

