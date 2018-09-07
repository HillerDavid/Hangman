console.log('App starting')
// - Create a list of words

var wordArray = ["Nicole", "Alyssa", "Mike", "David", "Jean", "Michael", "MiChel", "Josue"]
var lettersGuessed = []


// # Start the application!
document.onkeyup = function (event) {
    var displayWords = document.getElementById("display-words");
    var randomWord = wordGenerator()

    var tempString = "<p>"
    for (var i = 0; i < randomWord.length; i++) {
        if (lettersGuessed.includes(randomWord[i].toLowerCase)) {
            tempString += randomWord[i] + " ";
        } else {
            tempString += "_ "
        }

    }

    tempString += "</p>"
    displayWords.innerHTML = tempString
}

// - Select one randomly (Random Word Generator)
var wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * wordArray.length)
    return wordArray[wordIndex]
}


// - Display the word

// 1. Press any key to play again