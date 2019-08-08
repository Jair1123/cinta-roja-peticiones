const request = require('request');
const URL = "https://swapi.co/api/people/";
const URLM = "https://swapi.co/api/films/"

getCharacterById = (id) => {
    let url = URL + id;
    request.get(url, (error, response, body) => {
        const people = JSON.parse(body);
        console.log(`Soy el personaje ${people.name} y he participado en las peliculas `);
        for (let i = 1; i < people.films.length; i++) {
            let urlM = URLM + i;
            request.get(urlM, (error, response, body) => {
                const peliculas = JSON.parse(body);
                console.log(peliculas.title);
            });
        }
    });
}



getCharacterById('7')


