// Switch Statement

const color = 'pisyuns';

switch (color) {
  case 'green':
    console.log('Go');
    break;
  case 'yellow':
    console.log('Prigotovica');
    break;
  case 'red':
    console.log('Stayatь');
    break;
  default:
    console.log('in correct value');
}


// используем два сase подряд без break,в этом случае текст для субботыбудет тот же и для воскресения.

const weekDays = 'streda';

switch (weekDays) {
  case 'pondeli':
    console.log('Ebates mayn huen');
    break;
  case 'uteri':
    console.log('tozhe tyazhko');
    break;
  case 'streda':
    console.log('eto malenkaya subbota');
    break;
  case 'patek':
  case 'subbota':
  case 'nedele':
    console.log('Uuiiiiiiiiikendos maza faka!')
  default:
    console.log('Dozhd blyad!')
} 
