'use strict';
/*
Contenedores

var var1 = 23; //Ambito global
let var2 = 12; //Ambito local
const IVA_1 = 19;
var var1 = "Hola mundo";
console.log var1;
if true
    var var1 = false;

console.log var1;
No utilizar var :< */
let numero1;
let numero2;
let suma;
suma = 0;
numero1 =  parseFloat(prompt("Introduzca un numero")); //Cambiar de cadena a numero
numero2 = prompt("Introduzca un numero");
suma = numero1 + parseFloat (numero2);
console.log("La suma es:"+suma);
alert("La suma es: "+ suma);