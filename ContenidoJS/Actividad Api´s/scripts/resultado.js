async function getNasa(){
    const resp = await axios
    .get("https://api.nasa.gov/planetary/apod?api_key=3UurMQ9CYPquiWBO1XYp5quHOVfcocMp56x6S2g6")
    .then((response) => {
        console.log(response.data.results);
    })
    .catch((error)=>{
        console.log(error);
    });
    return resp;
}
 const data = await getNasa();
 console.log(data);
console.log("Esto es después de los datos");