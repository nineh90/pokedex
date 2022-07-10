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
    renderPokemenAttack(currentPokemon);
}

function renderPokemenAttack(currentPokemon){
    let attackOutput = document.getElementById('pokemonAttack');
    let firstAttack = currentPokemon['moves'][0]['move']['name'];
    let secondAttack = currentPokemon['moves'][1]['move']['name'];
    let thirdAttack = currentPokemon['moves'][2]['move']['name'];

    attackOutput.innerHTML += generateAttackHTML(firstAttack,secondAttack,thirdAttack);
    console.log('Attacks are:',firstAttack,secondAttack,thirdAttack );

}

function generateAttackHTML(firstAttack,secondAttack,thirdAttack){
    return`
    <div class="text-center">
        <div>
            ${firstAttack}
        </div>       
        <div>       
            ${secondAttack}
        </div>    
        <div>    
            ${thirdAttack}
        </div>  
    </div>      
`;
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
}