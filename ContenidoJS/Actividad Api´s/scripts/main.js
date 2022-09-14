fetch("https://api.nasa.gov/planetary/apod?api_key=3UurMQ9CYPquiWBO1XYp5quHOVfcocMp56x6S2g6")
     .then((response) => response.json())
     .then((json) => {
        //console.log(json.results);
        for (let p of json.results){
            console.log(p.apod);
        }
     })
     .catch((error)=> console.error("Se ha generado: "+error))
     .finally(console.info("Ha finalizado la petición"));