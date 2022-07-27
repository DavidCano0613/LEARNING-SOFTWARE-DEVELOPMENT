// function createParagraph() {
//   const para = document.createElement('p');
//   para.textContent = 'You clicked the button!';
//   document.body.appendChild(para);
// }

/*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

// const buttons = document.querySelectorAll('button');

// for (const button of buttons) {
//   button.addEventListener('click', createParagraph);
// }

//========================================================================================

// Numbers game.

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//   const userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = 'Previous guesses: ';
//   }
//   guesses.textContent += userGuess + ' ';

//   if (userGuess === randomNumber) {
//     lastResult.textContent = 'Congratulations! You got it right!';
//     lastResult.style.backgroundColor = 'green';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = '!!!GAME OVER!!!';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else {
//     lastResult.textContent = 'Wrong!';
//     lastResult.style.backgroundColor = 'red';
//     if(userGuess < randomNumber) {
//       lowOrHi.textContent = 'Last guess was too low!';
//     } else if(userGuess > randomNumber) {
//       lowOrHi.textContent = 'Last guess was too high!';
//     }
//   }

//   guessCount++;
//   guessField.value = '';
//   guessField.focus();
// }

// guessSubmit.addEventListener('click', checkGuess);

// function setGameOver() {
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement('button');
//   resetButton.textContent = 'Start new game';
//   document.body.append(resetButton);
//   resetButton.addEventListener('click', resetGame);
// }

// function resetGame() {
//   guessCount = 1;

//   const resetParas = document.querySelectorAll('.resultParas p');
//   for (const resetPara of resetParas) {
//     resetPara.textContent = '';
//   }

//   resetButton.parentNode.removeChild(resetButton);

//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = '';
//   guessField.focus();

//   lastResult.style.backgroundColor = 'white';

//   randomNumber = Math.floor(Math.random() * 100) + 1;
// }
//========================================================================================

// Métodos de cadenas

const nombre = "Juan David Paniagua Cano";
let variable = "hola"
const ejercicioStrings = () => {
  console.log(nombre.length);
  console.log(nombre.length - 1);
  console.log(nombre[12]);
  console.log(nombre.includes("o"));
  console.log(nombre.startsWith("Juan"));
  console.log(nombre.endsWith("Jeje"));
  console.log(nombre.slice(2, 16));
  console.log(nombre.slice(14));
  console.log(nombre.toLowerCase());
  console.log(nombre.toUpperCase());
  console.log(nombre.toLocaleLowerCase());
  console.log(nombre.toLocaleUpperCase());
  console.log(nombre.replace("Juan David", "Juancho"));
  console.log(nombre.concat(" Vidales"));
  console.log(nombre);
  console.log(nombre.indexOf("P"));
  console.log(nombre.lastIndexOf("P"));
  console.log(`Hola yo soy: ${nombre.repeat(10)}`)
  

};

ejercicioStrings();
