"use strict";
/*Declaracion de arreglos*/
//mejor que se cuide porque el sobre esfuerzo es malo
const myArray1 = [2,4,6,8,true,3.56,"Maria",800,"2"];
let myArray2 = new Array("a","e","i","o","u"); //new se refiere a objetos
/*
console.log(myArray1[6]);
console.log(myArray2[3]);
/*Iteración de arreglos
For in, For of, Foreach
*/
for (let i of myArray1){// for in imprime el contenido del arreglo
   // console.log(i);
}
for(let j in myArray1){ //for in imprime los indices del arreglo
    //console.log(j);
}
for (let k = 0; k < myArray1.length; k++){
    //console.log(myArray1[k]);
}
myArray2.forEach(element => {
    console.log(element);
});