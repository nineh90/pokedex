let currentPokemon;
let startSound = new Audio('');

async function init(){
   await load100PokemonFromApi();
}

async function load100PokemonFromApi(){
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    let responseUrl = await fetch(url);
    let loadedPokemon = await responseUrl.json();
    let pokemon = loadedPokemon['results']
    forLoopRenderPokemon(pokemon);
    console.log(pokemon);
}

function forLoopRenderPokemon(pokemon){
    let loadedPokemon = document.getElementById('pokedexContainer');
    loadedPokemon.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        let pokeName = pokemon[i]['name'];
        let name = pokeName.toUpperCase();
        loadedPokemon.innerHTML += `
        <div class="pokemon-name-container">${name}<img id="image${i}"></div>`;
        console.log('Name:',pokeName);
        loadCurrentPokemonFromApi(pokeName,i);
    }    
   
}

async function loadCurrentPokemonFromApi(pokeName,i){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let responseUrl = await fetch(url);
    currentPokemon = await responseUrl.json();
    console.log('Loaded Pokemon', currentPokemon);
    generateImage(i);
    //renderPokemonInfo(currentPokemon);
}

function generateImage(i){
    let pokemonImage = currentPokemon['sprites']['front_shiny'];
    document.getElementById(`image${i}`).src = pokemonImage
}

function renderPokemonInfo(){
    let currentCard = document.getElementById('pokemonName');
    currentPokemonName = currentPokemon['species']['name']; 
    createPokemonImage(currentPokemon);
    createPokemnonHTML(currentCard, currentPokemonName);
    renderPokemenAttack(currentPokemon);
}

function renderPokemenAttack(){
    let attackOutput = document.getElementById('pokemonAttack');
    let firstAttack = currentPokemon['moves'][0]['move']['name'];
    let secondAttack = currentPokemon['moves'][1]['move']['name'];
    let thirdAttack = currentPokemon['moves'][2]['move']['name'];
    
    document.getElementById('attackLength').innerHTML = currentPokemon['moves'].length

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
    let name = currentPokemonName.toUpperCase(); 
    currentCard.style.color = 'red'; 
    currentCard.innerHTML = '';
    currentCard.innerHTML += `
        <div>
            ${name}
        </div>`;
}

function createPokemonImage(){
    let pokemonImage = currentPokemon['sprites']['front_shiny'];
    document.getElementById('pokemonImg').src = pokemonImage;
}