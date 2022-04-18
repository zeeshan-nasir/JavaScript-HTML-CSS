const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const resultEl = document.getElementById("result");
const rEl = document.getElementById("r");
const pEl = document.getElementById("p");
const sEl = document.getElementById("s");

let userScore = 0;
let compScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

function game(userChoice) {
    // if (getcomputerChoice() === userChoice) {
    //     resultEl.innerText = "Its a draw!"; 
    // } else if ( getcomputerChoice() === "paper" && userChoice === "rock") {
    //     resultEl.innerText = "Paper covers rock. Computer wins!";
    //     compWins();
    // } else if ( getcomputerChoice() === "paper" && userChoice === "scissors") {
    //     resultEl.innerText = "Scissors cut paper. You win!";
    //     userWins();
    // } else if ( getcomputerChoice() === "rock" && userChoice === "paper") {
    //     resultEl.innerText = "Paper covers rock. You win!";
    //     userWins();     
    // } else if ( getcomputerChoice() === "rock" && userChoice === "scissors") {
    //     resultEl.innerText = "Rock beats scissors. Computer wins!";
    //     compWins(); 
    // } else if ( getcomputerChoice() === "scissors" && userChoice === "rock") {
    //     resultEl.innerText = "Rock beats scissors. You win!";
    //     userWins(); 
    // } else if ( getcomputerChoice() === "scissors" && userChoice === "paper") {
    //     resultEl.innerText = "Scissors cut paper. Computer wins!";
    //     compWins();
    // }
    
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw();
            break;
    }
};

function win(userChoice, computerChoice) {
    userScore += 1;
    userScoreEl.innerText = userScore;
    const smallUserWord = "(user)".fontsize(3).sub().fontcolor("red");
    const smallCompWord = "(comp)".fontsize(3).sub().fontcolor("red");
    resultEl.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord} . You win!`
}

function lose(userChoice, computerChoice) {
    compScore += 1;
    compScoreEl.innerText = compScore;
    const smallUserWord = "(user)".fontsize(3).sub().fontcolor("red");
    const smallCompWord = "(comp)".fontsize(3).sub().fontcolor("red");
    resultEl.innerHTML = `${computerChoice}${smallCompWord} beats ${userChoice}${smallUserWord} . You lose! `
}

function draw() {
    resultEl.innerHTML = "Its a draw!"
}

// function userWins() {
//     userScore += 1 ;
//     userScoreEl.innerText = userScore;
// }

// function compWins() {
//     compScore += 1 ;
//     compScoreEl.innerText = compScore;
// };

function getComputerChoice() {
   randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

rEl.addEventListener("click", function() {
    game("Rock");
});

pEl.addEventListener("click", function() {
    game("Paper");  
});

sEl.addEventListener("click", function() {
    game("Scissors"); 
});
