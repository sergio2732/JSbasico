"use strict";
let cadJSON = {"nombres" : "Juan Andres"};

let datos = [{
    "nombres": "Juan Andres",
    "apellidos": "Vargas Solano",
    "edad": 34, 
    "materias": ["Logica", "Programación", "Matemáticas"],
    "soltero" : true
},
{
    "nombres" : "Mario Andres",
    "Apellidos" : "Marquez",
    "edad" : 19,
    "materias": ["Logica", "Programación", "Matemáticas"],
    "soltero" : true    
}
]; /* [] = a un arreglo, {} => objeto */

Object.entries(datos).forEach((e)=> console.log (e)); 
//Sincrono: tiempo
//Asincrono: espacio