// - Create a list of words
var wordArray = ["Nicole", "Alyssa", "Mike", "David", "Jean", "Michael", "MiChel", "Josue"]

// - Remaining guesses from user until game over
var guessCounter = 0

// - All letters already guessed by user
var lettersGuessed = []

// - Appropriate choices for user to make
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// - Store word chosen by the generator
var chosenWord = ""

// - Display to user
var displayWord = document.getElementById("display-words")
var letters = document.getElementById("letters")
var showGuessCounter = document.getElementById("guess-counter")

// - Array for answer blanks
var answer = []

// - Game Status
var gameStarted = false

// # Start/Play the game!

document.onkeyup = function (event) {
    var userGuess = event.key

    // - New Game
    if (gameStarted === false) {
        gameStarted = true
        chosenWord = wordGenerator()
        for (i = 0; i < chosenWord.length; i++) {
            answer[i] = "_"
        }
        guessCounter = 10
        showGuessCounter.innerHTML = guessCounter
        
        console.log("Chosen Word: " + chosenWord)
        displayWord.innerHTML = answer.join(" ")
    } else {
        // - Game is active
        if (gameStarted === true) {

            // - Determine if letter was already guessed
            if (alphabet.includes(userGuess)) {

                // - Warns player they already tried that guess or pushes letter
                if (lettersGuessed.includes(userGuess)) {
                    alert("You already guessed " + userGuess + "! Try a different one!")
                } else {
                    lettersGuessed.push(userGuess)
                    letters.innerHTML = lettersGuessed
                    guessCounter--
                }

                for (i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === userGuess) {
                        answer[i] = userGuess
                        displayWord.innerHTML = answer.join(" ")
                    }
                }

            }

            if (guessCounter === 0) {
                alert("GAME OVER! YOU RAN OUT OF GUESSES!")
                alert("Press any key to reset game!")
                reset()
            } else if (!answer.includes("_")) {
                alert("CONGRATULATIONS! YOU WIN!")
                alert("Press any key to reset game!")
                reset()
            }

            showGuessCounter.innerHTML = guessCounter
        }
    }
}

// - Function randomly picks word from wordArray
var wordGenerator = function () {
    word = wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase()
    return word
}

var reset = function () {
    gameStarted = false
    lettersGuessed = []
}
