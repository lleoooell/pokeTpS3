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

pokeListe.setAttribute("class",'pokeListe');

pokedex.cards.forEach(function(pokemon) {
	console.log(pokemon);
	var li = document.createElement("li");
	li.setAttribute("class", "pokemon");
	// insère le nom du pokemon dans un span
	var spanNom = document.createElement("span");
	spanNom.innerHTML = pokemon.name;
	spanNom.setAttribute("class", "pokeNom")
	li.appendChild(spanNom);
	
	// insérer l'image du pokemon dans la puce

	var img = document.createElement("img");
	img.setAttribute("src",pokemon.imageUrl);
	img.setAttribute("class","pokeImg");
	li.appendChild(img);

	// type plus numero pokedex

	var spanBottom = document.createElement("span");
	spanBottom.setAttribute("class", "bottom");
	var spanType = document.createElement("span"); 
	spanType.setAttribute("class", "bottomType");
	var spanNum = document.createElement("span");
	spanNum.setAttribute("class", "bottomNum"); 

	if(pokemon.types && pokemon.types.length > 0){
		spanType.innerHTML = pokemon.types[0];
		spanBottom.appendChild(spanType);

	}
	spanNum.innerHTML = pokemon.number;
	spanBottom.appendChild(spanNum);
	li.appendChild(spanBottom);

	pokeListe.appendChild(li);


});

var container = document.getElementById("pokeContainer");
container.appendChild(pokeListe);