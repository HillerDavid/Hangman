console.log('App starting')

// Variable to determine whether game has begun

var gameStarted = false;

// - Create a list of words

var wordArray = ["Nicole", "Alyssa", "Mike", "David", "Jean", "Michael", "MiChel", "Josue"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var lettersGuessed = []
var chosenWord = ""

// # Start the application!

document.onkeyup = function (event) {
    var userGuess = event.key

    //New Game
    if (gameStarted === false) {
        gameStarted = true
        chosenWord = wordGenerator().toLowerCase()
        var blankWord = chosenWord.replace(/[a-z]/g, "_ ")
        console.log("Chosen Word: " + chosenWord + "blankWord: " + blankWord)
        document.getElementById("display-words").innerHTML = blankWord
    } else {

        //Determine if userGuess was previously made
        if (lettersGuessed.includes(userGuess)) {
            alert("You already guessed " + userGuess + "!")
        } else {
            lettersGuessed.push(userGuess)
            console.log("letter pushed")
        }

        //Determine whether userGuess is correct
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === userGuess) {
                console.log("correct " + tempString)
            } else {
                console.log("incorrect" + tempString)
            }
        }

    }
}

// - Select one randomly (Random Word Generator)
var wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * wordArray.length)
    return wordArray[wordIndex]
}


// - Display the word

// 1. Press any key to play again