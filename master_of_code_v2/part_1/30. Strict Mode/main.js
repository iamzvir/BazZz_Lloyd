// Strict Mode (строгий режим) должен быть указан в самом верху кода (в начале)

// раскоментить 'use strict' для наглядности примеров.
// 'use strict';

// 'use strict' - не даст написать код с ошибками

let hasCertificate = false;

const passExam = true;


// Первое что збывает с толку это странный синтаксис у if, ну то ладно, основная мысль в том что 'use strict' выводит в консоль ошибку, мы здесь в перемееной hasCetificate пропустили букву "r"
if (passExam) hasCetificate = true; // спецом пропустили букву 'r'. По плану мы ожидаем переприсвоение переменной hasCertificate нового значения - true а получаем новую переменную без буквы hasCetificate 'r' со значением true
if (hasCertificate) console.log('WoW');

console.log(hasCertificate);

/****** P.S ****/

// 1. При включеном строгом режиме у нас на строке 13 будет ошибка - ReferenceError: hasCetificate is not defined
// 2. Без строгого режима на строке 13 будет создана новая переменная hasCetificate и ей будет присвоено значение true.




// Еще строгий режим защищает от создания зарезервированых имен переменных в JS:
// - const interface = 'shmideo';
// - const package = 'myPackage';

// 1. При включеном строгом режиме у нас на строке 25 будет SyntaxError: Unexpected strict mode reserved word
// 2. Без строгого режима на строке 25 будет создана новая переменная interface и package, но в дальнейшем с ними могут возникнуть траблы. И еще много разных других приколов и имен резервов.

