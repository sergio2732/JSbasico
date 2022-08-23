let numero;
let par;
let impar;
par = 0;
impar = 0;
numero = parseFloat(prompt ("Introduzca el limite"));
 for(var i = 0; i <= numero; i++){
    if (i % 2 == 0){
    par = par + 1; 
    }
    else {
    impar = impar + 1;
    }
 }
 alert("La cantidad de numeros pares es: "+par);
 alert("La cantidad de numeros impares es: "+impar);