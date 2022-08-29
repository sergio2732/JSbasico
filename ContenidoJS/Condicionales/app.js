"use strict";
//condicionales
let num3 = 60;
let num4;
num4 = 12;
if(num3 > num4){
    console.log("num3 es mayor que num4");
} else{
    if(num3 % 2 === 0){
     console.log("Multiplo de 5")
    }
}
//Condicional ternario
let respuesta = (num4 >= 60) ? "num4 es mayor que 10" : "no es mayor que 10";
console.log(respuesta);
//Switch
let opcion = 4; 
switch (opcion){
    case 1:
        console.log("Opcion1");
        break;
    case 2:
        console.log("Opcion2");
        break;
    case 3:
        console.log("Opcion3");
        break;
    case 4:
        console.log("Opcion4");
        break;
    default:
        console.log("Opcion fuera de caso");
}
switch (true){
    case opcion >= 0 && opcion <= 2:
        console.log("Esta aplazado");
        break;
    case opcion >= 3 && opcion <= 5:
        console.log("Esta aprobado");
        break;
    case opcion > 5:
        console.log("Fuera de rango");
        break;
}