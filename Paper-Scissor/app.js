var pScore = 0;
var cScore = 0;
//Start Play
const play = document.querySelector('.play-btn');
play.addEventListener('click', function () {
    const intro = document.querySelector('.intro');
    intro.classList.add('fadOut');
    document.querySelector('.match').classList.add('fadIn');
});

//Play Match
const options = document.querySelectorAll(".option");

options.forEach(function (option) {
    option.addEventListener('click', function () {
        const computerOptions = ["rock", "paper", "scissors"];

        const hands = document.querySelectorAll('.hands img');
        hands.forEach(function (hand) {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            });
        });
        const computerNum = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNum];

        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        setTimeout(() => {
            checkResult(this.textContent, computerChoice);
            playerHand.src = `${this.textContent}.png`;
            computerHand.src = `${computerChoice}.png`;
        }, 2000);



        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";


    });
});
//Function for check result
var checkResult = function (playerHand, computerHand) {
    var winner = document.querySelector(".winner");
    if (playerHand == computerHand) {
        winner.textContent = "Match Tied";
        return;
    }

    if (playerHand == 'rock') {
        if (computerHand == 'scissors') {
            winner.textContent = "Player Won";
            pScore++;
            updateResult();

            return;
        } else {
            winner.textContent = 'Computer Won';
            cScore++;
            updateResult();

            return;
        }
    }
    if (playerHand == 'paper') {
        if (computerHand == 'scissors') {
            winner.textContent = "Computer Won";
            cScore++;
            updateResult();

            return;
        } else {
            winner.textContent = 'Player Won';
            pScore++;
            updateResult();

            return;
        }
    }
    if (playerHand == 'scissors') {
        if (computerHand == 'paper') {
            winner.textContent = "Player Won";
            pScore++;
            updateResult();

            return;
        } else {
            winner.textContent = 'Computer Won';
            cScore++;
            updateResult();

            return;
        }
    }
};

var updateResult = function () {
    const playerScore = document.querySelector('.player-score p')
    const computerScore = document.querySelector('.computer-score p')
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};