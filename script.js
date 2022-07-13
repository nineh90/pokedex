let currentPokemon;
let loadedPokemons;
let startSound = new Audio('');
const maxPokemons = 100;

async function init(){
    await loadPokemonFromApi();
}

async function loadPokemonFromApi(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}&offset=0`;
    let responseUrl = await fetch(url);
    let loadedPokemon = await responseUrl.json();
    loadedPokemons = loadedPokemon['results']
    forLoopRenderPokemon();
    //console.log(pokemon);
}

function forLoopRenderPokemon(){
    let pokedexContainer = document.getElementById('pokedexContainer');
    pokedexContainer.innerHTML = '';
    for (let i = 0; i <= loadedPokemons.length; i++) {
        if (loadedPokemons[i]) {
            let pokeName = loadedPokemons[i]['name'];
            pokedexContainer.innerHTML += generatePokemonHTML(pokeName.toUpperCase(),i);
            loadCurrentPokemonFromApi(pokeName,i);
        }
    }    
}

function generatePokemonHTML(name, i){
    return`
        <div id="pokemon${i}" onclick="showCurrentPokemonInfo('${name.toLowerCase()}')" class="pokemon-name-container">
            <div id="name${i}" class="margin-bottom">${name}</div>
            <div class="overview">
                <img id="image${i}">
            </div>
        </div>`
}

async function showCurrentPokemonInfo(pokeName){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let responseUrl = await fetch(url);
    currentPokemon = await responseUrl.json();
    let currentPokemonCard = currentPokemon['abilities'];

    for (let j = 0; j < currentPokemonCard.length; j++) {
        const element = currentPokemonCard[j];
        let currentAttack = currentPokemonCard[j]['ability']['name']
        console.log('TEST',currentAttack)
    }

    setStyleAttributes(pokeName);
    let image = document.getElementById(`activePokemonImage`);
    generateImage(image);
    console.log(pokeName, currentPokemonCard )
}

function setStyleAttributes(pokeName){
    document.getElementById('currentCard').classList.remove('d-none');
    document.getElementById('pokedexContainer').classList.add('d-none');
    document.getElementById('info').style.backgroundImage =  "url('./img/pikachu2.jpg')";
    document.getElementById('activePokemonName').innerHTML = 'Deine Mudda ist<br>' + pokeName.toUpperCase();
}

async function loadCurrentPokemonFromApi(pokeName,i){
    await getPokemonDataFromAPI(pokeName);
    console.log('Loaded Pokemon', currentPokemon);
    let image = document.getElementById(`image${i}`)
    generateImage(image);
}

async function getPokemonDataFromAPI(pokeName){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let responseUrl = await fetch(url);
    currentPokemon = await responseUrl.json();
}

function generateImage(image){
    let pokemonImage = currentPokemon['sprites']['front_shiny'];
    image.src = pokemonImage;
}

function closeCurrentPokemon(){
    document.getElementById('currentCard').classList.add('d-none');
    document.getElementById('pokedexContainer').classList.remove('d-none');
    document.getElementById('info').style.backgroundImage =  "url('./img/pokeball.png.jpg')";
}

/*function renderPokemonInfo(){
    document.getElementById('card').classList.remove('d-none');
    document.getElementById('pokedexContainer').classList.add('d-none');
    let currentCard = document.getElementById('pokemonName');
    currentPokemonName = currentPokemon['species']['name']; 
    createPokemonImage(currentPokemon);
    createPokemnonHTML(currentCard, currentPokemonName);
    renderPokemenAttack(currentPokemon);
    console.log('es geht');
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
}*/