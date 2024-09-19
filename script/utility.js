function hideElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementID){
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementID,value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function getElementTextById(elementID){
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

