"use strict";
//objeto literal de JS
//un objeto es una instancia de una clase con plantilla
let myObject = {
    nombre : "Felix",
    apellidos: "Ruiz",
    edad: 18,
    genero: "masculino",
}
//console.log(myObject.apellidos);
myObject.apellidos = "Sosa";
//console.log(myObject);
//Iterar un objeto
//Object.entries(myObject).forEach((element) => console.log(element));
//Object.entries(myObject).forEach(([key,value]) => console.log(key,value));
Object.key(myObject).forEach(([key]) => console.log(key));
