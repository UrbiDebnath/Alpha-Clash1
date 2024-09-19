// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');
    
//     const playgroundSection = document.getElementById('play');
//     playgroundSection.classList.remove('hidden');
// }
function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log("Your random alphabet", alphabet)

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}
function play(){
    hideElementByID('home');
    showElementByID('play');
    continueGame()
}