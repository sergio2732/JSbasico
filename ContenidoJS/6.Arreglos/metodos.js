"use strict";
let cadena = "enero-febrero-marzo-abril-mayo-junio-julio";
const myArray1 = [2,4,6,8,true,3.56,"Maria",800,"2"];
//metodo split
let resultArray = cadena.split("-");
//console.log(resultArray);
//metodo find
let result = myArray1.find((element) => element === 4);
//console.log(result);
//metodo findIndex
result = myArray1.findIndex((element) => element === "Maria");
//console.log(result);
//Metodo filter
result = myArray1.filter((element) => element % 2 === 0);
//console.log(result);