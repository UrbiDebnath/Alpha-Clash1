function handleKeyboard(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentElement = currentAlphabetElement.innerText;
    const expectedElement = currentElement.toLowerCase();


    if(playerPressed===expectedElement){
        //1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // 2.increase the score
        // const newScore = currentScore+1;
        // 3.set the new score
        // currentScoreElement.innerText = newScore;
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore+1;
        setTextElementValueById('current-score',newScore);

        removeBackgroundColor(expectedElement);
        continueGame();
    }
    else{
        // //1.get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //2.decrease the life
        // const newLife = currentLife-1;
        // //3.set the new life
        // currentLifeElement.innerText = newLife;
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife-1;
        setTextElementValueById('current-life',newLife);

        if(newLife===0){
            gameOver();
        }
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
    hideElementByID('final-score');
    showElementByID('play');
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0)
    continueGame();
}

function gameOver(){
    hideElementByID('play');
    showElementByID('final-score');
}