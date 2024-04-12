let numberToGuess;

let numberField = document.querySelector("#numberField");
let guessButton = document.querySelector("#guessButton");
let results = document.querySelector("#results");
const SuccessSound = new Audio('successInGTN.mp3');
const FailSound = new Audio('FailInGTN.mp3');

guessButton.addEventListener("click", checkNumber, false);

function setNumberToGuess() {
  numberToGuess = getRandomNumber(1, 100);
}
setNumberToGuess();

function getRandomNumber(low, high) {
  let r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

function checkNumber(event) {
  let enteredNumber = numberField.value;
  numberField.value = "";

  if (enteredNumber == numberToGuess) {
    SuccessSound.play();
    let message = `<p>----- New Game Time -----<p>
                    <p>🎉 Your guess of ${enteredNumber} is <b>correct</b>!</p>
                    <p>-------------------------<p>`;

    results.insertAdjacentHTML("afterbegin", message);

    setNumberToGuess();
    
    return;
  }

  if (enteredNumber < numberToGuess) {
    FailSound.play();
    let message = `<p>⚓ Your guess of ${enteredNumber} is <b>too low</b>!</p>`;

    results.insertAdjacentHTML("afterbegin", message);
  }

  if (enteredNumber > numberToGuess) {
    FailSound.play();
    let message = `<p>🎈 Your guess of ${enteredNumber} is <b>too high</b>!</p>`;

    results.insertAdjacentHTML("afterbegin", message);
  }
}
checkNumber();