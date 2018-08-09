// helpers

function showPokemon(event) {
    // console.log(event.target.textContent);
    console.log(event.currentTarget);
    window.location.href = './card.html?cardId=' + event.currentTarget.id;
}



// Ici, la requête sera émise de façon synchrone.
const req = new XMLHttpRequest();
req.open('GET', 'https://api.pokemontcg.io/v1/cards', false);

req.send(null);

if (req.status === 200) {
    // console.log("Réponse reçue: %s", req.responseText --> string);
    console.log(req);
    console.log(typeof req.responseText);
    // transformer une chaine en json 
    var pokedex = JSON.parse(req.responseText);
    console.log(pokedex);
    console.log(typeof pokedex)
        // transformer un json en chaine 
    var pokedexTxt = JSON.stringify(pokedex);
    console.log(pokedexTxt)
    console.log(typeof pokedexTxt)

} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}

var pokeListe = document.createElement("ul");

pokeListe.setAttribute("class", 'pokeListe list');

pokedex.cards.forEach(function(pokemon) {
    console.log(pokemon);
    var li = document.createElement("li");
    li.setAttribute("class", "pokemon");
    li.setAttribute("id", pokemon.id);
    // insère le nom du pokemon dans un span
    var spanNom = document.createElement("span");
    spanNom.innerHTML = pokemon.name;
    spanNom.setAttribute("class", "pokeNom")
    li.appendChild(spanNom);

    // insérer l'image du pokemon dans la puce

    var img = document.createElement("img");
    img.setAttribute("src", pokemon.imageUrl);
    img.setAttribute("class", "pokeImg");
    li.appendChild(img);

    // type plus numero pokedex

    var spanBottom = document.createElement("span");
    spanBottom.setAttribute("class", "bottom");
    var spanType = document.createElement("span");
    spanType.setAttribute("class", "bottomType");
    var spanNum = document.createElement("span");
    spanNum.setAttribute("class", "bottomNum");
    spanNum.innerHTML = "num: " + pokemon.number;
    spanBottom.appendChild(spanNum);

    if (pokemon.types && pokemon.types.length > 0) {
        spanType.innerHTML = "type: " + pokemon.types[0];
        spanBottom.appendChild(spanType);


    }


    li.appendChild(spanBottom);

    li.addEventListener("click", showPokemon, false);
    pokeListe.appendChild(li);


});

var container = document.getElementById("pokeContainer");
container.appendChild(pokeListe);
var pagination = document.createElement("ul");
pagination.setAttribute("class", "pagination");
container.appendChild(pagination);
// pagination avec listjs
var monkeyList = new List('pokeContainer', {
    valueNames: ['pokeNom'],
    page: 12,
    pagination: true
});


// Exemple d'itération dans un tableau pour remonter une valeur/objet particulière
// exemple : je cherche l'id ex8-98 dans le tableau des pokemons

// function rechercheIndex(table, id) {
// 	// var toReturn;
//     table.forEach(function(pokemon) {

//         console.log(pokemon.id);

//         if(pokemon.id === id){
//         	console.log("pokemon trouvé, il s'agit de %s ", pokemon.name)
//         	// console.log(pokemon);
//  			  toReturn = pokemon;
//         }
//         else{
//         	console.log("mauvais pokemon");
//         }
//     });

//     return toReturn;
// }

// var monpokemon  = rechercheIndex(pokedex.cards, "ex8-98");
// console.log(monpokemon);



