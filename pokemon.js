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

function currentPokemonIsGrass(currentPokemonClass, imageBackground){
    if (pokemonIsGrass(currentPokemonClass)) {
        setGrassAttributes(imageBackground);
    } 
}

function currentPokemonIsWater(currentPokemonClass, imageBackground){
    if(pokemonIsWater(currentPokemonClass)){
       setWaterAttributes(imageBackground);
    }  
}

function currentPokemonIsFire(currentPokemonClass, imageBackground){
    if(pokemonIsFire(currentPokemonClass)){
       setFireAttributes(imageBackground);
    } 
}

function currentPokemonIsBug(currentPokemonClass, imageBackground){
    if(pokemonIsBug(currentPokemonClass)){
        setBugAttributes(imageBackground);
    } 
}

function currentPokemonIsNormal(currentPokemonClass, imageBackground){
    if(pokemonIsNormal(currentPokemonClass)){
        setNormalAttributes(imageBackground);
    } 
}

function currentPokemonIsPoison(currentPokemonClass, imageBackground){
    if(pokemonIsPoison(currentPokemonClass)){
       setPoisonAttributes(imageBackground);
    }
}

function currentPokemonIsElectric(currentPokemonClass, imageBackground){
    if(pokemonIsElectric(currentPokemonClass)){
        setElectricAttributes(imageBackground);
    }   
}

function currentPokemonIsGround(currentPokemonClass, imageBackground){
    if(pokemonIsGround(currentPokemonClass)){
        setGroundAttributes(imageBackground);
    } 
}


function currentPokemonIsFairy(currentPokemonClass, imageBackground){
    if(pokemonIsFairy(currentPokemonClass)){
        setFairyAttributes(imageBackground);
    }
}

function currentPokemonIsRock(currentPokemonClass, imageBackground){
    if(pokemonIsRock(currentPokemonClass)){
        setRockAttributes(imageBackground);
    }
}

//downlaod flaticon chance color
// function currentPokemonIsPsychic(currentPokemonClass, imageBackground){
//     if(currentPokemonClass === 'psychic'){
//         imageBackground.style.backgroundColor  = 'black';
//         document.getElementById('activePokemonClass').src = './img/rocks.png';
//     }
// }

function generateImage(image){
    let pokemonImage = currentPokemon['sprites']['front_shiny'];
    image.src = pokemonImage;
}

function closeCurrentPokemon(){
    document.getElementById('currentCard').classList.add('d-none');
    document.getElementById('pokedexContainer').classList.remove('d-none');
    document.getElementById('info').style.backgroundImage =  "url('./img/pokeball.png.jpg')";
}




