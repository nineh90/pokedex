function setStyleAttributes(pokeName){
    document.getElementById('currentCard').classList.remove('d-none');
    document.getElementById('pokedexContainer').classList.add('d-none');
    document.getElementById('info').style.backgroundImage =  "url('./img/pikachu2.jpg')";
    document.getElementById('activePokemonName').innerHTML = pokeName.toUpperCase();
}

function setGrassAttributes(imageBackground){
    imageBackground.style.backgroundColor = 'green';
    document.getElementById('activePokemonClass').src = './img/grass.png';
}

function pokemonIsGrass(currentPokemonClass){
    return currentPokemonClass === 'grass';
}

function setWaterAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'blue';
    document.getElementById('activePokemonClass').src = './img/water.png';
}

function pokemonIsWater(currentPokemonClass){
    return currentPokemonClass === 'water' 
}

function setFireAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'orangered';
    document.getElementById('activePokemonClass').src = './img/flames.png';
}

function pokemonIsFire(currentPokemonClass){
    return currentPokemonClass === 'fire'
}

function setBugAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'lightgray';
    document.getElementById('activePokemonClass').src = './img/antivirus.png';
}

function pokemonIsBug(currentPokemonClass){
    return currentPokemonClass === 'bug'
}

function setNormalAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'lightblue';
    document.getElementById('activePokemonClass').src = './img/rating.png';
}

function pokemonIsNormal(currentPokemonClass){
    return currentPokemonClass === 'normal'
}

function setPoisonAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'darkred';
    document.getElementById('activePokemonClass').src = './img/poison.png';
}

function pokemonIsPoison(currentPokemonClass){
    return currentPokemonClass === 'poison'
}

function setElectricAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'lightyellow';
    document.getElementById('activePokemonClass').src = './img/lightning.png';
}

function pokemonIsElectric(currentPokemonClass){
    return currentPokemonClass === 'electric'
}

function setGroundAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'lightgreen';
    document.getElementById('activePokemonClass').src = './img/ground.png';
}

function pokemonIsGround(currentPokemonClass){
    return currentPokemonClass === 'ground'
}

function setFairyAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'lightyellow';
    document.getElementById('activePokemonClass').src = './img/magic-wand.png';
}

function pokemonIsFairy(currentPokemonClass){
    return currentPokemonClass === 'fairy'
}

function setRockAttributes(imageBackground){
    imageBackground.style.backgroundColor  = 'grey';
    document.getElementById('activePokemonClass').src = './img/rocks.png';
}

function pokemonIsRock(currentPokemonClass){
    return currentPokemonClass === 'rock'
}