let cont1 = 3;
let cont2 = cont1;
//console.log(cont1, cont2);
cont1 = 10;
//console.log(cont1, cont2);
/* Por referencia */
let planeta = {
    nombre : "marte"
} 
let otroPlaneta = planeta;
console.log(planeta, otroPlaneta);
planeta.nombre = "tierra";
console.log(planeta, otroPlaneta);
//Para copiar objetos se hace clonando