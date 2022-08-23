let numero1;
let numero2;
let resultado;
resultado = 0;
numero1 = parseFloat(prompt("Introduzca el primer numero: "));
numero2 = parseFloat(prompt("Introduzca el segundo numero: "));
if (numero1 % 2 == 0 && numero2 % 2 == 0){
    resultado = numero1 * numero2;
    alert("El resultado de la multiplicacion de pares es: "+resultado);
}
else{
    alert("Algun numero que ingreso no es par");
}