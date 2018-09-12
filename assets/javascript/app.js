// - Create a list of words
var wordArray = ["Ana", "Bastion", "Brigitte", "Dva", "Genji", "Hanzo", "Junkrat", "Lucio", "McCree", "Mei", "Mercy",
    "Orisa", "Pharah", "Reaper", "Reinhardt", "Roadhog", "Soldier", "Sombra", "Symmetra", "Torbjorn", "Tracer",
    "Widowmaker", "Winston", "Hammond", "Zarya", "Zenyatta"]

// - Remaining guesses from user until game over
var guessCounter = 0

// - Number of Wins and Losses
var wins = 0
var losses = 0

// - All letters already guessed by user
var lettersGuessed = []

// - Appropriate choices for user to make
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// - Store word chosen by the generator
var chosenWord = ""

// - Array for answer blanks
var answer = []

// - Game Started Status
var gameStarted = false

// - Display to user
var showWord = document.getElementById("display-words")
var showLetters = document.getElementById("letters")
var showGuessCounter = document.getElementById("guess-counter")
var showWins = document.getElementById("wins")
var showLosses = document.getElementById("losses")
var startKey = document.getElementById("start-key")
var characterImage = document.getElementById("character")

// # Start/Play the game!
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase()

    // - New Game
    if (gameStarted === false) {
        start()
    }
    // - Game is active
    else {

        if (gameStarted === true) {

            // - Determine if key pressed is a letter of the alphabet
            if (alphabet.includes(userGuess)) {

                // - Tells player the letter choice was already used
                if (lettersGuessed.includes(userGuess) || lettersGuessed.includes(userGuess.toUpperCase())) {
                    alert("You already guessed " + userGuess + "! Try a different one!")
                }
                // - Add letter guessed by user to list of guessed letters and removes one remaining guess attempts
                else {
                    lettersGuessed.push(userGuess.toUpperCase())
                    showLetters.innerHTML = lettersGuessed
                }

                // - Checks if letter matches letters in word blanks and replaces it where it matches.
                for (i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === userGuess) {
                        answer[i] = userGuess
                        showWord.innerHTML = answer.join(" ")
                    }
                }
            }
            guessCounter--
            showGuessCounter.innerHTML = guessCounter
            // - Lose game if out of guesses
            if (guessCounter === 0 && answer.includes("_")) {
                alert("Defeated!")
                losses++
                showLosses.innerHTML = losses
                endGame()
            }
            // - Win game if all letters guessed correctly
            else if (!answer.includes("_")) {
                alert("Victory!")
                characterImage.src = "assets/images/" + chosenWord + ".png"
                characterImage.style.visibility = "visible"
                wins++
                showWins.innerHTML = wins
                endGame()
            }
        }
    }
}

// - Function randomly picks word from wordArray
var wordGenerator = function () {
    word = wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase()
    return word
}

// - Reset for new game
var start = function () {
    gameStarted = true
    answer = []
    lettersGuessed = []
    showLetters.innerHTML = lettersGuessed
    chosenWord = wordGenerator()
    for (i = 0; i < chosenWord.length; i++) {
        answer[i] = "_"
    }
    showWord.innerHTML = answer.join(" ")
    guessCounter = 12
    showGuessCounter.innerHTML = guessCounter
    characterImage.style.visibility = "hidden"
    startKey.innerHTML = "<style>visiblity: hidden</style>"
}

// - Toggle end of the game and instruct player how to play again
var endGame = function () {
    startKey.innerHTML = "<style>visibility: visible</style> Press any key to play again!"
    gameStarted = false
}