async function getPokemons(){
    const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
        console.log(response.data.results);
    })
    .catch((error)=>{
        console.log(error);
    });
    return resp;
}
 const data = await getPokemons();
console.log("Esto es después de la petición");