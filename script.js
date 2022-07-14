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
                <img class="pokemon-image" id="image${i}">
            </div>
        </div>`
}

async function showCurrentPokemonInfo(pokeName, i){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let responseUrl = await fetch(url);
    currentPokemon = await responseUrl.json();
    let currentPokemonCard = currentPokemon['abilities'];
    let currentPokemonClass = currentPokemon['types'][0]['type']['name'];
    setBackgroundCurrentPokemon(currentPokemonClass);
    forLoopCurrentCard(currentPokemonCard);
    setStyleAttributes(pokeName);
    let image = document.getElementById(`activePokemonImage`);
    generateImage(image);
    console.log(pokeName, currentPokemonClass)
}

function setBackgroundCurrentPokemon(currentPokemonClass){
    let imageBackground = document.getElementById('activePokemonImage');
        currentPokemonIsGrass(currentPokemonClass, imageBackground);
        currentPokemonIsWater(currentPokemonClass, imageBackground);
        currentPokemonIsFire(currentPokemonClass, imageBackground);
        currentPokemonIsBug(currentPokemonClass, imageBackground);
        currentPokemonIsNormal(currentPokemonClass, imageBackground);
        currentPokemonIsPoison(currentPokemonClass, imageBackground);
        currentPokemonIsElectric(currentPokemonClass, imageBackground);
        currentPokemonIsGround(currentPokemonClass, imageBackground);
        currentPokemonIsFairy(currentPokemonClass, imageBackground);
        currentPokemonIsRock(currentPokemonClass, imageBackground);

}

function forLoopCurrentCard(currentPokemonCard){
    let attackOutput = document.getElementById('attack');
    attackOutput.innerHTML = ''; 
        for (let j = 0; j < currentPokemonCard.length; j++) {
            const element = currentPokemonCard[j];
            let currentAttack = currentPokemonCard[j]['ability']['name'];
            attackOutput.innerHTML += `<li>${currentAttack}</li>`;
            console.log('TEST',currentAttack);
        }
}

function setStyleAttributes(pokeName){
    document.getElementById('currentCard').classList.remove('d-none');
    document.getElementById('pokedexContainer').classList.add('d-none');
    document.getElementById('info').style.backgroundImage =  "url('./img/pikachu2.jpg')";
    document.getElementById('activePokemonName').innerHTML = pokeName.toUpperCase();
}

function currentPokemonIsGrass(currentPokemonClass, imageBackground){
    if (currentPokemonClass === 'grass') {
        imageBackground.style.backgroundColor  = 'green';
        document.getElementById('activePokemonClass').src = './img/grass.png';
    } 
}

function currentPokemonIsWater(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'water' ){
        imageBackground.style.backgroundColor  = 'blue';
        document.getElementById('activePokemonClass').src = './img/water.png';
    }  
}

function currentPokemonIsFire(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'fire'){
        imageBackground.style.backgroundColor  = 'orangered';
        document.getElementById('activePokemonClass').src = './img/flames.png';
    } 
}

function currentPokemonIsBug(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'bug'){
        imageBackground.style.backgroundColor  = 'lightgray';
        document.getElementById('activePokemonClass').src = './img/antivirus.png';
    } 
}

function currentPokemonIsNormal(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'normal'){
        imageBackground.style.backgroundColor  = 'lightblue';
        document.getElementById('activePokemonClass').src = './img/rating.png';
    } 
}

function currentPokemonIsPoison(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'poison'){
        imageBackground.style.backgroundColor  = 'darkred';
        document.getElementById('activePokemonClass').src = './img/poison.png';

    }
}

function currentPokemonIsElectric(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'electric'){
        imageBackground.style.backgroundColor  = 'darkblue';
        document.getElementById('activePokemonClass').src = './img/lightning.png';

    }   
}

function currentPokemonIsGround(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'ground'){
        imageBackground.style.backgroundColor  = 'lightgreen';
        document.getElementById('activePokemonClass').src = './img/ground.png';
    } 
}

function currentPokemonIsFairy(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'fairy'){
        imageBackground.style.backgroundColor  = 'lightyellow';
        document.getElementById('activePokemonClass').src = './img/magic-wand.png';

    }
}
function currentPokemonIsRock(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'rock'){
        imageBackground.style.backgroundColor  = 'grey';
        document.getElementById('activePokemonClass').src = './img/rocks.png';
    }
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