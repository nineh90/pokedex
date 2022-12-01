function generatePokemonHTML(name, i){
    return`
        <div id="pokemon${i}" onclick="showCurrentPokemonInfo('${name.toLowerCase()}')" class="pokemon-name-container">
            <div id="name${i}" class="margin-bottom">${name}</div>
            <div class="overview">
                <img class="pokemon-image" id="image${i}">
            </div>
        </div>`
}

function setBackgroundCurrentPokemon(currentPokemonClass){
    let imageBackground = document.getElementById('activePokemonImage');
        checkForPokemonClass(currentPokemonClass, imageBackground);
}

function checkForPokemonClass(currentPokemonClass, imageBackground){
    ifCurrentPokemonIsGrass(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsWater(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsFire(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsBug(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsNormal(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsPoison(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsElectric(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsGround(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsFairy(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsRock(currentPokemonClass, imageBackground);
    ifcurrentPokemonIsPsychic(currentPokemonClass, imageBackground);
}

function ifCurrentPokemonIsGrass(currentPokemonClass, imageBackground){
    if (pokemonIsGrass(currentPokemonClass)) {
        setGrassAttributes(imageBackground);
    } 
}

function ifcurrentPokemonIsWater(currentPokemonClass, imageBackground){
    if(pokemonIsWater(currentPokemonClass)){
       setWaterAttributes(imageBackground);
    }  
}

function ifcurrentPokemonIsFire(currentPokemonClass, imageBackground){
    if(pokemonIsFire(currentPokemonClass)){
       setFireAttributes(imageBackground);
    } 
}

function ifcurrentPokemonIsBug(currentPokemonClass, imageBackground){
    if(pokemonIsBug(currentPokemonClass)){
        setBugAttributes(imageBackground);
    } 
}

function ifcurrentPokemonIsNormal(currentPokemonClass, imageBackground){
    if(pokemonIsNormal(currentPokemonClass)){
        setNormalAttributes(imageBackground);
    } 
}

function ifcurrentPokemonIsPoison(currentPokemonClass, imageBackground){
    if(pokemonIsPoison(currentPokemonClass)){
       setPoisonAttributes(imageBackground);
    }
}

function ifcurrentPokemonIsElectric(currentPokemonClass, imageBackground){
    if(pokemonIsElectric(currentPokemonClass)){
        setElectricAttributes(imageBackground);
    }   
}

function ifcurrentPokemonIsGround(currentPokemonClass, imageBackground){
    if(pokemonIsGround(currentPokemonClass)){
        setGroundAttributes(imageBackground);
    } 
}


function ifcurrentPokemonIsFairy(currentPokemonClass, imageBackground){
    if(pokemonIsFairy(currentPokemonClass)){
        setFairyAttributes(imageBackground);
    }
}

function ifcurrentPokemonIsRock(currentPokemonClass, imageBackground){
    if(pokemonIsRock(currentPokemonClass)){
        setRockAttributes(imageBackground);
    }
}

function ifcurrentPokemonIsPsychic(currentPokemonClass, imageBackground){
    if(currentPokemonClass === 'psychic'){
        imageBackground.style.backgroundColor  = 'black';
        document.getElementById('activePokemonClass').src = './img/hypocrisy.png';
    }
}

function generateImage(image){
    let pokemonImage = currentPokemon['sprites']['front_default'];
    image.src = pokemonImage;
}

function closeCurrentPokemon(){
    document.getElementById('currentCard').classList.add('d-none');
    document.getElementById('pokedexContainer').classList.remove('d-none');
    document.getElementById('info').style.backgroundImage =  "url('./img/pokeball.png.jpg')";
}




