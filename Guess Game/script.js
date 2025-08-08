let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#input-box');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    // here we validate the number that if the value is under 100 or not, if < 100 continue or if > 100 give alert

    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess < 1) {
        alert('please enter a number more than 1');
    }else if(guess > 100){
        alert('please enter a number less than 100');
    }else{
        prevGuess.push(guess);
        if (numGuess === 10 ) {
            displayGuess(guess);
            displayMessage(`Game over,  Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    //  this is used to find the guessed numeber that is if the user entered number is equal to math.random() number, then we display a message that the user had won the game

    if(guess === randomNumber) {
        displayMessage('you guessed it right');
    } else if (guess < randomNumber) {
        displayMessage('number is too low');
    }else if (guess > randomNumber) {
        displayMessage('number is too high')
    }

}

function displayGuess(guess){
    // cleaning the values in input
    // cleanup method   
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
// display won message if user guesses right number equal to math.random()
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
// display won message if user guesses right number equal to math.random()
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start new game </h2>`;
    startOver.appendChild(p)
    playGame = false;  
    newGame()    
}

function newGame(){
// display won message if user guesses right number equal to math.random()
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - newGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    })
}




