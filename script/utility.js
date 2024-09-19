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

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

