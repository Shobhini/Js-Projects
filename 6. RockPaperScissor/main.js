let userScore= 0;
let cpuScore=0;
let closeBtn;

const userScoreSpan= document.getElementById("userScore");
const cpuScoreSpan= document.getElementById("cpuScore");
const restart= document.getElementById("restart");
const result = document.getElementById("result");
const modal= document.querySelector(".modal");
const rockDiv =document.getElementById("rock");
const paperDiv =document.getElementById("paper");
const scissorDiv =document.getElementById("scissor");

function getCpuChoice(){
    const choices= ['rock', 'paper', 'scissor'];
    const randomNumber= Math.floor(Math.random()*3);

    return choices[randomNumber];
}

function whoWin(userChoice, cpuChoice){
    userScore++;
    userScoreSpan.innerHTML= userScore;
    cpuScoreSpan.innerHTML= cpuScore;

    result.innerHTML= `<span class="close"> </span>
    <h1 class="text-win"> You win!!!</h1>
    <p> Computer choose <strong> ${cpuChoice} </strong></p>`;

    modal.style.display= 'flex';
}

function whoLoses(userChoice, cpuChoice){
    cpuScore++;
    userScoreSpan.innerHTML= userScore;
    cpuScoreSpan.innerHTML= cpuScore;

    result.innerHTML= `<span class="close"> </span>
    <h1 class="text-loses"> You Lost!!!</h1>
    <p> Computer choose <strong> ${cpuChoice} </strong></p>`;

    modal.style.display= 'flex';
}

function play(userChoice){
    const cpuChoice= getCpuChoice();
    switch(userChoice + cpuChoice){
        case 'rockScissor':
        case 'paperrock':
        case 'scissorPaper':
            whoWin(userChoice, cpuChoice);
            break;
        case 'rockPaper':
        case 'paperScissor':
        case 'scissorRock':
            whoLoses(userChoice, cpuChoice);
            break;
        case 'rockRock':
        case 'paperPaper':
        case 'scissorScissor':
            draw(userChoice, cpuChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', function(){
        play('rock');
    })
    paperDiv.addEventListener('click', function() {
        play('paper');
    })
    scissorDiv.addEventListener('click', function() {
        play('scissor');
    })
}

function clearModal(e) {
    closeBtn= document.querySelector('.close');

    if(e.target == modal){
        modal.style.display = "none"
    }else if(closeBtn){
        closeBtn.addEventListener('click', function() {
            modal.style.display="none"
        });
    }
}

function restartGame() {
    userScore=0;
    cpuScore=0;
    userScoreSpan.innerHTML = userScore;
    cpuScoreSpan.innerHTML= cpuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main();
