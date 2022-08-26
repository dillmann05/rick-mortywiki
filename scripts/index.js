import API from './api.js';
import Character from './characters.js';
const api = new API();

let currentCharacter = 1;

const loadNext = document.querySelector('#load-next');
const loadPrevious = document.querySelector('#load-previous');

loadNext.addEventListener("click", async ()=>{
    const characterData = await api.getCharacter(++currentCharacter);
    new Character(characterData);
})

loadPrevious.addEventListener("click", async ()=>{
    if(currentCharacter === 1){
        currentCharacter = 1;
    }else{
        const characterData = await api.getCharacter(--currentCharacter);
        new Character(characterData);
    }
})

async function initApp(characterID){
    const characterData = await api.getCharacter(characterID);
    new Character(characterData);
}

initApp(currentCharacter);