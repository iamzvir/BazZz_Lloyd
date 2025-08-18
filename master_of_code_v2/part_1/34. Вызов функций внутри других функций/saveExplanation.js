const nodeHtmlToImage = require('node-html-to-image');

const explanation = `
<h2>Пошаговое объяснение работы кода</h2>
<ol>
  <li>Определены две функции: <b>colorMixer</b> и <b>colorizer</b>.</li>
  <li>Вызов <code>colorizer('car', 'red', 'green')</code>.<br>
      Аргументы: item = 'car', color1 = 'red', color2 = 'green'.</li>
  <li>Внутри <b>colorizer</b> вызывается <code>colorMixer('red', 'green')</code>.</li>
  <li>В <b>colorMixer</b> параметры: color1 = 'red', color2 = 'green'.<br>
      Возвращается строка 'red + green'.</li>
  <li>В <b>colorizer</b> формируется строка 'The car is red + green.' и возвращается.</li>
  <li>В консоль выводится: <code>The car is red + green.</code></li>
</ol>
`;

nodeHtmlToImage({
  output: './explanation.png',
  html: explanation
}).then(() => {
  console.log('PNG-файл explanation.png успешно создан!');
});