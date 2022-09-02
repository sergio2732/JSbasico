"use strict";
/*So... Operador de propagacion */
const myArray1 = [2,4,6,8,true,3.56,"Maria",800,"2"];
let myArray2 = new Array("a","e","i","o","u");
myArray1.push(300.677);
//let result = myArray1.concat(myArray2);
let result = [...myArray1, ...myArray2];
console.log(...result);
function print(parm1, parm2= 0, ...parm3){
    console.log(`Esto es una imprecion de parametros: ${parm1} ${parm2} ${parm3}`)
}
print (...myArray1);