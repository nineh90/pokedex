let currentPokemon;
let loadedPokemons;
//let cardSound = new Audio('./mp3/pika.mp3');
const maxPokemons = 100;

async function init(){
    await loadPokemonFromApi();
}

function forLoopRenderPokemon(){
    let pokedexContainer = document.getElementById('pokedexContainer');
    pokedexContainer.innerHTML = '';
    for (let i = 0; i < loadedPokemons.length; i++) {
            let pokeName = loadedPokemons[i]['name'];
            pokedexContainer.innerHTML += generatePokemonHTML(pokeName.toUpperCase(),i);
            loadCurrentPokemonFromApi(pokeName,i);
    }   
}

function forLoopCurrentCard(currentPokemonCard){
    let attackOutput = document.getElementById('attack');
    attackOutput.innerHTML = ''; 
        for (let j = 0; j < currentPokemonCard.length; j++) {
            const element = currentPokemonCard[j];
            let currentAttack = currentPokemonCard[j]['ability']['name'];
            attackOutput.innerHTML += `<li>${currentAttack}</li>`;
            console.log('Attacke',currentAttack);    
        }
}