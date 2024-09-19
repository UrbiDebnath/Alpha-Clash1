function handleKeyboard(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentElement = currentAlphabetElement.innerText;
    const expectedElement = currentElement.toLowerCase();


    if(playerPressed===expectedElement){
        removeBackgroundColor(expectedElement);
        continueGame();
    }
    else{
        console.log("You lost a point");
    }
}

document.addEventListener('keyup',handleKeyboard);

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log("Your random alphabet", alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}
function play(){
    hideElementByID('home');
    showElementByID('play');
    continueGame()
}