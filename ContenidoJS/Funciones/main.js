'use strict';
//Funcion clasica
function printinCad(cadena = "No paso parametro"){
    //template string
    console.log(`Esto es una prueba de cadena ${cadena}`);
}

//Invocación
printinCad("Estoy pasando parametro");

//Funcion tipo flecha
const operacion = (num1 = 1, num2 = 1) => {
     let result = Math.pow(num1, num2);
     return result;
}
//Invocación
console.log(operacion(3,2));
//consultar math y day