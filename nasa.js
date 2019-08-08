const request = require('request');
// key = 'Rs2EiXKeSk6BxsqdF6TuagOaJdcxvA90U5dkGyl9';
url_Nasa = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-29&end_date=2019-08-05&api_key=Rs2EiXKeSk6BxsqdF6TuagOaJdcxvA90U5dkGyl9'

// request.get(url_Nasa, (error, response, body) => {
//     if (response.statusCode === 200) {
//         let asteroides = JSON.parse(body).near_earth_objects;
//         // La cuestion aqui es que no puedo entrar al objeto{} debido a que no es un arreglo es un objeto y no puedo poner el indicce ademas de que no puedo entrar a la fecha por los -
//         // entonces uso este tipo de []
//         console.log(asteroides['2019-08-04'][0].id);


//     } else console.log(error);
// });


///////////////////Ejercicio de nasa con callbacks//////////////////
// const getHazardousAsteroids = () => {
//     request.get(url_Nasa, (error, response, body) => {
//         const json = JSON.parse(body).near_earth_objects
//         // console.log(json.near_earth_objects['2019-08-04'][0]) 
//         //Object.values me permite ver los valores de las fechas 2019-08-04 y de las demas 
//         const fechas = Object.values(json); 
//         // console.log(`estas son las fechas que iterare en un foreach`);
//         console.log(fechas[1]);

//         //Aqui hago un foreach para ir recorriendo las fechas 1 por una y poder acceder a ellas a las fechas 
//         fechas.forEach(fecha =>{
//             //cada fecha es un arreglo por lo que vamos a iterar en cada uno con nuestra funcion foreach
//             // console.log('Esto es lo que pasa despues del primer foreach')
//             // console.log(fecha);
//             //Este for each es para poder acceder los valores dentro de las fechas ejemplo id 
//             fecha.forEach(asteroide => {
//                 // console.log(asteroide.is_potentially_hazardous_asteroid);
//                 //condicionar para imprimir los que sean true con la llave hazaourd asteroids
//                 // console.log(asteroide.id)  
//                 if (asteroide.is_potentially_hazardous_asteroid){
//                     console.log(asteroide.id);
//                 }
//             })         
//         })
//     })
// }

// getHazardousAsteroids(); 

/////////////////////////////////////////////////////////////

const NasaPromesa = new Promise((resolve, reject) => {
    request.get(url_Nasa, (error, response, body) => {

        // console.log(json);
        // console.log(json.near_earth_objects);

        if (response.statusCode === 200) {
            const json = JSON.parse(body);
            const dangerousA = [];
            const fechas = Object.values(json.near_earth_objects);
            fechas.forEach(fecha => {
                fecha.forEach(asteroide => {
                    // condicionar para imprimir los que sean true con la llave is_potentially_hazardous_asteroid
                    if (asteroide.is_potentially_hazardous_asteroid)
                        dangerousA.push(asteroide.id);
                })
            })
            response.statusCode === 200

                ? resolve(dangerousA)

                : reject(new Error(`Èrror, codigo: ${response.statusCode}`))
        }


    })
})

NasaPromesa
    .then(respuesta => {

        console.log(`Asteroides peligrosos con el id: ${respuesta}`)

    })

    .catch(error =>

        console.log(error)


    )


