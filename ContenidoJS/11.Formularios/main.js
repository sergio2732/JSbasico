const form = document.getElementById("form");
const btn =document.getElementById("btnDatos");
const names =document.getElementById("inputNames");
const age =document.getElementById("inputAge");
const mail =document.getElementById("inputEmail");
const city =document.getElementById("inputCity");
const policy =document.getElementById("checkPolitica");
//Control de validaciones
const objectValid = {
    nombres: false,
    edad: false,
    correo: false,
    ciudad: false,
    politica: false
};

//validar formulario

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    if (validform() === -1){
        alert("Enviando el formulario");
    }else{
        alert("Error en valores del formulario");
    }
});
const validform = () =>{
    const values = Object.values(objectValid);
    let response = values.findIndex(event => event === false)
    return response;    
}

names.addEventListener("change", (event) => {
    console.log(event.target);
    const namesRgex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorNames = event.target.value;
    objectValid.nombres = valorNames.match(namesRgex) ? true : false;
    console.log(Object.values(objectValid));
});
age.addEventListener("change", function(event){
    console.log(event.target.value);
    const ageRegex = /(^[0-9]{1,2}$)/g;
    if((age.value.match(ageRegex)) && ((parseInt(age.value)) >=18)){
        objectValid.edad = true;
    }else{
        objectValid.edad = false;
    }
    console.log(Object.values(objectValid));
});
mail.addEventListener("change", function(event){
    console.log(event.target.value);
    const mailRegrex = /^[a-z0-9!#$%&'*+/=?^`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/;
    let valorMail = event.target.value;
    objectValid.correo = valorMail.match(mailRegrex) ? true : false;
    console.log(Object.values(objectValid));
});
policy.addEventListener("change", function(event){
    objectValid.politica = event.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});
city.addEventListener("select", (event) =>{
    objectValid.ciudad = event.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});
