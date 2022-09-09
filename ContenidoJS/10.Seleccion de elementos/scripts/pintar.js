import { validAprobar } from "./validar.js";
const  arrayEstudiantes =[];
const agregarEstudiante = (name, lastname, avg) =>{
    let estudent = {
        nombre : name,
        apellido : lastname,
        promedio : avg
    };
    arrayEstudiantes.push(estudent);
    console.log(arrayEstudiantes);
}

const paintCard = () =>{
      /*
      fragment = mini DOM  
      */
     const fragment = document.createDocumentFragment();
     const temEstudiante = document.querySelector("templateEstudiante").content;
     const cardsEstudiante = document.querySelector("#cardsEstudiantes");
     for (let i of arrayEstudiantes){
        console.log(i);
        const cloneTemEstudiante = temEstudiante.cloneNode(true);
        cloneTemEstudiante.querySelector(".tittle-card").innerHTML = "<strong>DATOS DE LA PERSONA </strong>"
        cloneTemEstudiante.querySelector(".data-card").innerHTML = `Nombre: ${i.nombre} Apellido: ${i.apellido}`;
        cloneTemEstudiante.querySelector(".text-promedio").innerHTML = `Promedio: ${i.promedio}`;
        cloneTemEstudiante.querySelector(".text-aprobado").innerHTML = `${validAprobar(i.promedio)}`;
        fragment.appendChild(cloneTemEstudiante);
     }
     cardsEstudiante.appendChild(fragment);
};

export{agregarEstudiante, paintCard};