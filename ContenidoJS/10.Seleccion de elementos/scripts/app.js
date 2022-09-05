"use strict";
//get tomar
//set establecer
//Seleccionar elementos del DOM
let myTitle = document.getElementById("titulo");
//console.log(myTitle);
//Seleccionar por el name
let tagName = document.getElementsByName("art1");
//console.log(tagName);
//Seleccion por etiqueta
let etiqueta = document.getElementsByTagName("h3");
//console.log(etiqueta);
//querySelector
let queryContainer = document.querySelector("#container");
//console.log(queryContainer);
//QuerySelector class
let myMenu = document.querySelector(".menu");
//console.log(myMenu);
//QuerySelector etiqueta
let myol = document.querySelector("ol");
//console.log(myol);
//all
let allArt = document.querySelectorAll("article");
//console.log(allArt);
//crear elementos
let miParrafo = document.createElement("p");
miParrafo.id="parrafo";
miParrafo.className="parrafo";
miParrafo.textContent="baihuoh ouhshasivbasigd su fasigd fgdssfigsogfdsogu";
miParrafo.innerHTML="<h3>Esto es otro titulo</h3>0rsahgvarpwshpbh  <strong>weaf</strong>sdpvihpaséw erihrgihpavavasdf"; 
//Insertar elemento en el DOM
//document.body.appendChild(miParrafo);
//Seleccion elemento
let seccion1 = document.getElementById("section1");
seccion1.appendChild(miParrafo);
 