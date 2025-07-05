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

    result.innerHTML= `<span class="close">&times;</span>
    <h1 class="text-win"> You win!!!</h1>
    <p> Computer choose <strong> ${cpuChoice} </strong></p>`;

    modal.style.display= 'flex';
}

function whoLoses(userChoice, cpuChoice){
    cpuScore++;
    userScoreSpan.innerHTML= userScore;
    cpuScoreSpan.innerHTML= cpuScore;

    result.innerHTML= `<span class="close">&times;</span>
    <h1 class="text-loses"> You Lost!!!</h1>
    <p> Computer choose <strong> ${cpuChoice} </strong></p>`;

    modal.style.display= 'flex';
}


function draw(userChoice, cpuChoice) {
    userScoreSpan.innerHTML= userScore;
    cpuScoreSpan.innerHTML= cpuScore;
    result.innerHTML= `<span class="close">&times; </span>
    <h1 > It's a draw!</h1>
    <p> You both choose <strong> ${cpuChoice} </strong></p>`;

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

function closeModal() {
    modal.style.display = "none";
}

function setupModalListeners() {
    // Attach close button listener once
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside modal content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Optional: Close modal on Escape key
    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });
}

function restartGame() {
    userScore=0;
    cpuScore=0;
    userScoreSpan.innerHTML = userScore;
    cpuScoreSpan.innerHTML= cpuScore;
}

restart.addEventListener('click', restartGame);
setupModalListeners();
main();
