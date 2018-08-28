console.log("je suis dans le profil");

// Etape I = Récupération de l'id
// passer l'url de la page dans une variable
var url = window.location.href;
console.log(url);
// je récupère les search params
var params = (new URL(document.location)).searchParams;

// je récupère juste la clé qu'il me faut
var cardId = params.get("cardId"); 

console.log("ma carte est la carte %s",cardId);

// Etape II. Remonter la carte correspondante - Interroger l'API,la db, etc)

// Ici, la requête sera émise de façon synchrone.
const req = new XMLHttpRequest();
var urlToGet = 'https://api.pokemontcg.io/v1/cards/' + cardId;
// alert(urlToGet);
req.open('GET', urlToGet , false);

req.send(null);

if (req.status === 200) {
    // console.log("Réponse reçue: %s", req.responseText --> string);
    // console.log(req);
    // console.log(typeof req.responseText);
    // transformer une chaine en json 
    var response = JSON.parse(req.responseText);
    console.log(response);
    var monPokemon = response.card;

    console.log(monPokemon);

} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}

var cont = document.getElementById("container");

var titre = document.createElement("h1");
titre.innerHTML = monPokemon.name;
var img = document.createElement("img");
img.src= monPokemon.imageUrlHiRes;

cont.appendChild(titre);
cont.appendChild(img);


