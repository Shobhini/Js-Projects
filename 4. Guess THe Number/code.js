let randomno= parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guesslot = document.querySelector('.guesses');
const remain = document.querySelector('.last res');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver= document.querySelector('resParas');

const p= document.createElement('p')

let preguess=[]
let numguess= 1
let playGame =true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid no')
    }else if(guess <1){
        alert('Please enter a valid no')
    }else if(guess > 100){
        alert('Please enter a no less than 100')
    }else{
        preguess.push(guess)
        if(numguess === 11){
            displayGuess(guess);
            displayMessage('Game Over, Random no was ${randomno}')
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
            
        }
    }
}
function checkGuess(guess){
    if(guess === randomno){
        displayMessage('You guessed it right');
        endGame();
    }else if(guess <randomno){
        displayMessage('no is TOOO low');
    }else if(guess > randomno){
        displayMessage('no is TOOO high');
    }
}
function displayGuess(_guess){
    userInput.value='';
    guesslot.innerHTML += '${guess},  ';
    numguess++;
    remain.innerHTML= '${11- numguess} ';
}
function displayMessage(_message){
    lowOrHi.innerHTML ='<h2> ${message} </h2>';
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id = "newGame"> Start new Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton,addEventListener('Click', function(e){
        randomno =parseInt(Math.random()*100 +1);
        preguess =[];
        newguess =1;
        guesslot.innerHTML ='';
        remain.innerHTML = '${11 - newguess} ';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}