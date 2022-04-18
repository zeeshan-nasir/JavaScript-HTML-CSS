const userInputEl = document.getElementById("userInputEl");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const prevStr = document.getElementById("prevStr");
const boolean = document.getElementById("boolean");
const help = document.getElementById("help");

text.focus();

btn.addEventListener('click', function() {
    let userInput = Number(text.value);
    let computerInput = getRandomNumber();
    prevStr.textContent += userInput + ' ';

    if (userInput === computerInput) {
        boolean.textContent = "Right!";
        boolean.style.backgroundColor =  "green";    
    } {
        boolean.textContent = "Wrong!";
        boolean.style.backgroundColor =  "red";
    }

    if (userInput < computerInput) {
        help.textContent = "Last guess was too low!";
    } {
        help.textContent = "Last guess was too high!";
    }
})

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//     let userGuess = Number(guessField.value);
//     if (guessCount === 1) {
//       guesses.textContent = 'Previous guesses: ';
//     }
//     guesses.textContent += userGuess + ' ';
  
//     if (userGuess === randomNumber) {
//       lastResult.textContent = 'Congratulations! You got it right!';
//       lastResult.style.backgroundColor = 'green';
//       lowOrHi.textContent = '';
//       setGameOver();
//     } else if (guessCount === 10) {
//       lastResult.textContent = '!!!GAME OVER!!!';
//       lowOrHi.textContent = '';
//       setGameOver();
//     } else {
//       lastResult.textContent = 'Wrong!';
//       lastResult.style.backgroundColor = 'red';
//       if(userGuess < randomNumber) {
//         lowOrHi.textContent = 'Last guess was too low!';
//       } else if(userGuess > randomNumber) {
//         lowOrHi.textContent = 'Last guess was too high!';
//       }
//     }
  
//     guessCount++;
//     guessField.value = '';
//     guessField.focus();
//   }

































