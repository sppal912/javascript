let { use } = require("react");

const randomNumber = parseInt(Math.random() * 100) + 1;

const submit = document.querySelector('.guessField');
const userInput = document.querySelector('.guessSubmit');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');

let numGuess = 1;
let prevGuess = [];
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
} 


const validateGuess = (guess) => {
if(isNaN(guess)) {
    alert('Please enter a valid number');
    return;
}
else if (guess < 1 ) {
    alert('Please enter a number between 1 and 100');
}
else if (guess > 100 ) {
    alert('Please enter a number between 1 and 100');
}
else {
    prevGuess.push(guess);
    if (numGuess > 10) {
        displayGuesses(guess);
        displayMessage(`Game Over! You have used all your guesses. ${randomNumber} was the number.`);
        endGame();
    } else {
        displayGuesses(guess);
        checkGuess(guess);
    }
}
};

const checkGuess = (guess) => {
if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the number in ${numGuess} guesses!`);
    endGame();
} else if (guess < randomNumber) {
    displayMessage('Too low! Try again!');
} else if (guess > randomNumber) {
    displayMessage('Too high! Try again!');
}

};

const displayGuesses = (guess) => {
userInput.value = '';
guessSlot.innerHTML += `${guess},  `;
remaining.innerHTML = `You have ${10 - numGuess} guesses left.`;
numGuess++;
};

const displayMessage = (message) => {
lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const newGame = () => {
    document.querySelector('#newGame').addEventListener('click', function(e) {
randomNumber = parseInt(Math.random() * 100) + 1;
prevGuess = [];
numGuess = 1;
guessSlot.innerHTML = '';
remaining.innerHTML = `${10 - numGuess} guesses left.`;
lowOrHi.innerHTML = '';
userInput.removeAttribute('disabled');
startOver.removeChild(p);
playGame = true;
    })
}

const endGame = () => {
userInput.value = '';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
startOver.appendChild(p);
playGame = false;
newGame();
}