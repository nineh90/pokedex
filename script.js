let currentPokemon;
let startSound = new Audio('');

async function init(){
    await loadPokemonFromApi();
}


async function loadPokemonFromApi(){
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let responseUrl = await fetch(url);
    let currentPokemon = await responseUrl.json();
    console.log('Loaded Pokemon', currentPokemon);
    renderPokemonInfo(currentPokemon);
}

function renderPokemonInfo(currentPokemon){
    let currentCard = document.getElementById('pokemonName');
    let currentPokemonName = currentPokemon['species']['name']; 
    createPokemonImage(currentPokemon);
    createPokemnonHTML(currentCard, currentPokemonName);
}

function createPokemnonHTML(currentCard, currentPokemonName){
    currentCard.innerHTML = '';

    currentCard.innerHTML += `
        <div>
            ${currentPokemonName}
        </div>`;
}

function createPokemonImage(currentPokemon){
    let pokemonImage = currentPokemon['sprites']['front_shiny'];
    document.getElementById('pokemonImg').src = pokemonImage;
    
    
    
    //`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`; 

}