let randomNumber = Math.floor(Math.random() * 10) + 1;

let button = document.querySelector("#checkBtn");
let restart = document.querySelector("#restartBtn");
let input = document.querySelector("#guess");
let result = document.querySelector("#result");
let attemptsText = document.querySelector("#attempts");

let attempts = 0;

button.addEventListener("click", function () {
  let userGuess = Number(input.value);

  attempts++;
  attemptsText.textContent = "Attempts: " + attempts;

  if (userGuess === randomNumber) {
    result.textContent = "Correct!";
  } else if (userGuess > randomNumber) {
    result.textContent = "Too High!";
  } else {
    result.textContent = "Too Low!";
  }
});

restart.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 10) + 1;

  attempts = 0;

  attemptsText.textContent = "Attempts: 0";

  result.textContent = "";

  input.value = "";
});
