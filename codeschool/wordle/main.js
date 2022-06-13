//step 1 create the new element 
// var newElement = document.createElement("div");
// newElement.classList.add("new-div")
//step 2: query the existing parent element
// var parentElement = document.querySelector("body");

//step 3: append the child element to the parent element
// parentElement.appendChild(newElement);

// newElement.innerHTML = "hi im new here!"

//for i in range 6
var ATTEMPTS = 6;
var LENGTH = 5;

var correctWord = ""; // save this
var currentGuess = "";
var guesses = []; // save this
var allowed = [];
var answers = [];
var gameOver = false; //save this

function saveState() {
    localStorage.setItem("correctWord", JSON.stringify(correctWord));
    localStorage.setItem("guesses", JSON.stringify(guesses));
    localStorage.setItem("gameOver", JSON.stringify(gameOver));
}

function loadState() {
    correctWord = JSON.parse(localStorage.getItem("correctWord"));
    guesses = JSON.parse(localStorage.getItem("guesses"));
    gameOver = JSON.parse(localStorage.getItem("gameOver"));

    if (!guesses) {
        guesses = [];
    }
    if (!gameOver) {
        gameOver = false;
    } else {
        resetGame();
    }

}
function updateGuesses() {
    var guessesDiv = document.querySelector("#guesses");
    guessesDiv.innerHTML = "";

    for (var i = 0; i < ATTEMPTS; i++) {
        var guessDiv = document.createElement("div");
        guessDiv.classList.add("guess");
        guessesDiv.appendChild(guessDiv);
        var result;
        if (i < guesses.length) {
            guessDiv.classList.add("guessed");
            result = checkWord(correctWord, guesses[i]);
        }
        for (var j = 0; j < LENGTH; j++) {
            var letterDiv = document.createElement("div");
            letterDiv.classList.add("letter");
            if (i < guesses.length) {
                letterDiv.innerHTML = guesses[i][j];
                if (result[j] == 1) {
                    letterDiv.classList.add("match");
                }
                else if (result[j] == 2) {
                    letterDiv.classList.add("contains");
                }
            }
            if (i == guesses.length && j < currentGuess.length) {
                //show the current guess in the last row
                letterDiv.innerHTML = currentGuess[j];
            }
            guessDiv.appendChild(letterDiv);
        }
    }
}
// old setup inputs
// function setupInputs() {
//     var wordleInput = document.querySelector("#wordle-input");
//     var wordleButton = document.querySelector("#input-button");
//     var messageDiv = document.querySelector("#wrong-message");
//     wordleButton.onclick = function () {
//         var guess = wordleInput.value;
//         console.log(guess)
//         console.log(guesses)
//         console.log(allowed)
//         if (guess.length != 5) {
//             messageDiv.innerHTML = guess + " Is Not a five letter word! Try again!";
//             wordleInput.value = ""
//         } else if (!allowed.includes(guess)) {
//             messageDiv.innerHTML = "Not a real word! try again!"
//             wordleInput.value = ""
//         } else {
//             guesses.push(guess);
//             wordleInput.value = "";
//             console.log("guesses: ", guesses)
//             messageDiv.value = "";
//             updateGuesses();
//         }
//     };
// }


//new setupinputs
function setupInputs() {
    document.onkeydown = function (event) {
        if (!gameOver && !event.altKey && !event.ctrlKey && !event.metaKey) {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                if (currentGuess.length < 5) {
                    currentGuess += event.key.toLowerCase();
                }
            } else if (event.keyCode == 8) {
                currentGuess = currentGuess.slice(0, -1);
            } else if (event.keyCode == 13) {
                submitGuess();
                currentGuess = "";
            }
        }
        updateGuesses();
    };
}
function submitGuess() {
    var messageDiv = document.querySelector("#message");

    if (currentGuess.length != 5) {
        messageDiv.innerHTML = "Not a five letter word. Try again!";
    } else if (!allowed.includes(currentGuess)) {
        messageDiv.innerHTML = " This word is not allowed! Try again!.";
    } else {
        if (guesses.length < 6) {
            guesses.push(currentGuess);
            messageDiv.innerHTML = "";
            if (currentGuess == correctWord) {
                messageDiv.innerHTML = "You win!";
                gameOver = true;

            } else if (guesses.length == 6) {
                messageDiv.innerHTML = "You lose!";
                gameOver = true;
            }
        }
        saveState();
        updateGuesses();
    }
}
function shadeKeyboard() {
    var keyboardContainer = document.querySelector("keyboard-cont");


}
function checkWord(correct, guess) {
    var result = [0, 0, 0, 0, 0];
    // loops and stuff
    var correctWordArray = correctWord.split("");
    //mark 1 for green letters
    for (var i = 0; i < LENGTH; i++) {
        if (guess[i] == correctWordArray[i]) {
            correctWordArray[i] = null;
            result[i] = 1;
        }
    }
    //mark 2 for yellow letters
    for (var i = 0; i < LENGTH; i++) {
        var index = correctWordArray.indexOf(guess[i]);
        if (index >= 0 && result[i] == 0) {
            correctWordArray[index] = null;
            result[i] = 2
        }
    }
    return result;
}


function fetchWordList() {
    fetch("https://api.jsonbin.io/b/629f9937402a5b38021f6b38").then(function (response) {
        response.json().then(function (data) {
            allowed = data.allowed.concat(data.answers);
            answers = data.answers;
            randomizeWord();
        });
    });

}
function resetGame() {
    correctWord = ""; // save this
    currentGuess = "";
    guesses = []; // save this
    allowed = [];
    answers = [];
    gameOver = false; //save this
}

function getWordOfTheMinute() {
    var dateString = moment().format('YYYYMMDDHHmm');
    var dateNumber = parseInt(dateString, 10);
    var minuteWord = answers[dateNumber % answers.length];
    return minuteWord;

}
function randomizeWord() {
    if (correctWord) {
        console.log("the answer is still ", correctWord)
    } else {
        var index = Math.floor(Math.random() * answers.length);
        correctWord = answers[index];
        console.log("the answer is", correctWord);
        saveState();
    }
}

loadState();
fetchWordList();
setupInputs();
updateGuesses();
