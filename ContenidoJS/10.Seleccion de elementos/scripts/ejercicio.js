import{validString, validPromedio} from "./validar.js";
import {validAprovar} from "./pintar.js";
const btnAgregar = document.getElementById("btn");
const btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener("click", function(){
    paintCard();
});

btnAgregar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const promedio = document.getElementById("promedio").value;
    const tipo = document.getElementById("tipo").value;
    
    if(validString(nombre) && validString(apellido) && tipo != "0"){
         if (!isNaN(parseFloat(promedio)) && (validPromedio(promedio))){
              console.log("validado");
              agregarEstudiante(nombre, apellido, promedio);
         }else{
            console.log("Error en el promedio");
            modalAlert("Error en dato promedio");
         }
    }else{
        console.log("Error en datos")
        modalAlert("Error en datos, revisar");
    }
});

const modalAlert = (cadena) => {
    const divAlert = document.createElement("div");
    const textAlert = document.createElement("p");
    //propiedades de los elementos
    divAlert.setAttribute("id", "alert");
    divAlert.setAttribute("class", "alerta");
    textAlert.setAttribute("class", "textAlerta");
    TextDecoder.innerHTML = `${cadena}`;
    divAlert.appendChild(textAlert);
    document.body.appendChild(divAlert);
    divAlert.onclick = function() {
        document.getElementById("alert").remove();
    }
}