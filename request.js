const request = require('request');
const URL = 'https://pokeapi.co/api/v2/pokemon/'

getPokemonById = (id) => {
    let url = URL + id;
    request.get(url,(error,response,body)=>{
        const json = JSON.parse(body);
        console.log(`Soy el pokemon ${json.name} mi numero es: ${json.order}, los movimientos que tengo son: ${json.moves[0].move.name}, ${json.moves[1].move.name}, ${json.moves[11].move.name}, tambien ${json.moves[10].move.name} las habilidades que poseo: ${json.abilities[1].ability.name} y soy del tipo: ${json.types[0].type.name} `);
        
    });
}

getPokemonById('150')

// Traer de 4 movimientos de mewtwo
