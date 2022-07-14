async function loadPokemonFromApi(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}&offset=0`;
    let responseUrl = await fetch(url);
    let loadedPokemon = await responseUrl.json();
    loadedPokemons = loadedPokemon['results']
    forLoopRenderPokemon();
    //console.log(pokemon);
}

async function getPokemonDataFromAPI(pokeName){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let responseUrl = await fetch(url);
    currentPokemon = await responseUrl.json();
}

async function showCurrentPokemonInfo(pokeName){
    cardSound.play();
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

async function loadCurrentPokemonFromApi(pokeName,i){
    await getPokemonDataFromAPI(pokeName);
    console.log('Loaded Pokemon', currentPokemon);
    let image = document.getElementById(`image${i}`)
    generateImage(image);
}