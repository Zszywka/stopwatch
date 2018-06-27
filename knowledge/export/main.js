//  Import code
import { square, diag } from 'math';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

//If you want to import all parts of the module:
//(symbol*) as(jako) math(nazwa obiektu) form(z pliku) math.js
import * as math from 'math';
console.log(math.square(11)); // 121
console.log(math.diag(4, 3)); // 5

// Default export
//------ log.js ------
export default function () {} // no semicolon!

//------ main1.js ------
import log from 'log';
log();

// Diffrent Import
// Import domyślny:
import math from 'src/math';
// Import nazwany:
 import { sqrt, diag } from 'src/math';
// Import w przestrzeni nazw:
 import * as math from 'src/math';
// Zmiana nazwy importowanego modułu nazwanego:
import { sqrt as sq, diag } from 'src/math';
// Zmiana nazwy importowanego modułu domyślnego:
import { default as m } from 'src/math';
// Import laczony:
import math, { diag as diagonal } from 'src/math';
