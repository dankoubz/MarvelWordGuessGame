// Marvel Hangman Game
// Theme: Marvel Superheores Cinematic

//Delcare global variables
// marvel object array
var marvel = {
    characters: ["thor", "iron man", "hulk"],
    movies: ["avengers age of ultron", "guardians of the galaxy"],
    quotes: ["i am iron man", "hulk like raging fire", "your friendly neighbourhood spiderman"]
};
// alphabet for keyboard generation
var alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
    'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
];

var welcomeScreen = 0; // welcome screen data
var lives; // amount of lives in game
var correctGuess = 0; // counter for a correct guess
var wordPhrase; // word to guess
var clickedLetter = []; // clicked letters captured
var wins = 0; // wins in game session
var loss = 0; // loss in game session
var chosenLevel; // select level via numbers
var userGuesses = []; // store user inputs
var lettersState; //letters state
var space = 0; // spaces in words

var mobileStartGame = document.getElementById("mobileBtn"); // mobile button to start game
var showLives = document.getElementById("mylives"); // lives in game
var resetBtn = document.getElementById("reset");

// run functions on load
window.onload = function() {
    // Press any key to start game
    // Document listen to key up
    document.onkeyup = function startGame() {
        switch (welcomeScreen) {
            case 0:
                // remove welcome screen and display game as block
                document.getElementById("welcome").style.display = "none";
                document.getElementById("main-game").style.display = "block";
                welcomeScreen = 1;
                break;
            case 1:
                console.log("your game is already loaded");
                break;
            default:
                console.warning("welcome screen wrong state value");
        }
    }

    // Start game via mobile
    mobileStartGame.addEventListener("click", function() {
        // remove welcome screen and display game as block
        document.getElementById("welcome").style.display = "none";
        document.getElementById("main-game").style.display = "block";
        welcomeScreen = 1;
    })

    // run intalisation on load
    initialiseGame();
}

// Generate keyboard on load
var keyboardGenerate = function() {
    // find html id and create a div
    keyboardBox = document.getElementById('keyboard');

    // run a for loop to generate letters
    for (var i = 0; i < alphabet.length; i++) {
        // create a button element add classes and html of array
        keysButton = document.createElement('button');
        keysButton.classList.add("letter", "keyboardBtn");
        keysButton.innerHTML = alphabet[i];
        // append to create buttons inside the div
        keyboardBox.appendChild(keysButton);
    }
}

// function to generate game level
function selectChosenLevel() {
    console.log("Here to choose your difficulty");
    switch (chosenLevel) {
        case 1:
            console.log("easy mode activated");
            categorySelect = marvel.characters;
            randomiseSelectPhrase();
            break;
        case 2:
            console.log("mediun mode activated");
            categorySelect = marvel.movies;
            randomiseSelectPhrase();
            break;
        case 3:
            console.log("hard mode activated");
            categorySelect = marvel.quotes;
            randomiseSelectPhrase();
            break;
        default:
            console.log("auto easy mode activated");
            categorySelect = marvel.characters;
            randomiseSelectPhrase();
    }
}

// function to randomly generate word phrase
function randomiseSelectPhrase() {
    wordPhrase = categorySelect[Math.floor(Math.random() * categorySelect.length)];
    wordPhrase = wordPhrase.replace(/\s/g, "-");
    console.log(wordPhrase);
    displayWordsOnPage();
}

// function to display chosen phrase
function displayWordsOnPage() {
    // find html to place word
    placeWordsInHere = document.getElementById("addPhrase");
    for (var i = 0; i < wordPhrase.length; i++) {
        // // create text element and set classes for styling
        createPhraseText = document.createElement("h2");
        createPhraseText.classList.add("guess", "specialChar");

        // statement to replace spaces and make underscores
        if (wordPhrase[i] === "-") {
            createPhraseText.innerHTML = "  "; // replace - as spaces
            space += 1;
        } else {
            createPhraseText.innerHTML = "_"; // replace with lines
        }

        userGuesses.push(createPhraseText);
        // add the h2 element within the new div
        placeWordsInHere.appendChild(createPhraseText);
    }
}

// function event listener to click type on keyboard
function setupKeyboardClicks() {
    var documentButtonKeys = document.getElementsByClassName("keyboardBtn");
    // loop to run event listener for keys
    for (i = 0; i < documentButtonKeys.length; i++) {
        // event listener on obkect applied
        documentButtonKeys[i].addEventListener("click", function() {

            // stop lives going in to minus numbers
            if (lives <= 0) {
                console.log('Dead player');
                return;
            }

            // on click make button disabled
            this.setAttribute("disabled", "disabled");
            // find inner html letter that is clicked
            clickedLetter = (this.innerHTML);
            console.log("fired on click - " + clickedLetter);

            // change variable to true if letter found in for loop
            var guessedLetterFound = false;

            for (var i = 0; i < wordPhrase.length; i++) {
                // if word index === guess then run
                if (wordPhrase[i] === clickedLetter) {
                    userGuesses[i].innerHTML = clickedLetter;
                    console.log("that's the correct letter!");
                    // add a correct guess
                    correctGuess += 1;
                    guessedLetterFound = true;
                    lettersState = 0;
                }
            }

            if (!guessedLetterFound) {
                // minus life
                lives -= 1;
                lettersState = 1;
                console.log("incorrect letter!");
            }

            addLettersToBox()
            gameLivesTrack();
        })
    }
}

// function to select level of game
function selectYourLevel() {
    // select buttons
    btnEasy = document.getElementById("easy");
    btnMedium = document.getElementById("medium");
    btnHard = document.getElementById("hard");
    allBtns = document.querySelector("button.btn");

    btnEasy.onclick = function() {
        chosenLevel = 1;
        btnEasy.classList.add("active");
        btnMedium.classList.remove("active");
        btnHard.classList.remove("active");
        initialiseGame("reset");
    }

    btnMedium.onclick = function() {
        chosenLevel = 2;
        btnMedium.classList.add("active");
        btnEasy.classList.remove("active");
        btnHard.classList.remove("active");
        initialiseGame("reset");
    }

    btnHard.onclick = function() {
        chosenLevel = 3;
        btnHard.classList.add("active");
        btnEasy.classList.remove("active");
        btnMedium.classList.remove("active");
        initialiseGame("reset");
    }
}

// add clicked keyboard letters to the letter box
function addLettersToBox() {

    // add selected letter to the letter box div
    usedBtn = document.createElement("button");
    letterBox.appendChild(usedBtn);

    switch (lettersState) {
        case 0:
            usedBtn.classList.add("keyUsedBtn", "keyCorrect");
            usedBtn.textContent = clickedLetter;
            break;
        case 1:
            usedBtn.classList.add("keyUsedBtn", "keyIncorrect");
            usedBtn.textContent = clickedLetter;
            break;
    }
}

// function that tracks current lives of game
function gameLivesTrack() {

    // change lives image on screen
    switch (lives) {
        case 0:
            document.getElementById("life-1").classList.add("d-none");
            document.getElementById("life-1").classList.remove("d-inline-block");
        case 1:
            document.getElementById("life-2").classList.add("d-none");
            document.getElementById("life-2").classList.remove("d-inline-block");
        case 2:
            document.getElementById("life-3").classList.add("d-none");
            document.getElementById("life-3").classList.remove("d-inline-block");
        case 3:
            document.getElementById("life-4").classList.add("d-none");
            document.getElementById("life-4").classList.remove("d-inline-block");
        case 4:
            document.getElementById("life-5").classList.add("d-none");
            document.getElementById("life-5").classList.remove("d-inline-block");
            break;
        case 5:
            console.info("lives are full");
            break;
        default:
            console.warn("Unexpected Life Tally - " + lives);
    }

    // Update Life Tally Text
    if (lives) {
        showLives.innerHTML = "You have " + lives + " lives";
    } else {
        showLives.innerHTML = "<h2>Game Over</h2>";
        gameScore(-1);
    }

    console.log(correctGuess + " " + space + " Counter + Spaces total");
    console.log(userGuesses.length + " User guesses length");

    // look at spaces and guess length - innner html change you win
    if (correctGuess + space === userGuesses.length) {
        showLives.innerHTML = "You Win!";
        // call function to add win!
        gameScore(+1);
    }

}

// function to update the game score
gameScore = function(value) {

    if (value === +1) {
        wins += 1;
    } else if (value === -1) {
        loss += 1;
    }

    // for wins
    winsDisplay = document.getElementById("winCount");
    winsDisplay.innerHTML = "Wins: " + wins;

    // for losses
    lossDisplay = document.getElementById("lossCount");
    lossDisplay.innerHTML = "Losses: " + loss;

}



// Intialise the hangman game
function initialiseGame(status) {

    if (status === "reset") {
        keyboardBox.innerHTML = "";
        letterBox.innerHTML = "";
        userGuesses = [];

        // correctGuess.innerHTML = 0;
        addPhrase.innerHTML = "";

        // reset lives images
        lives = 0;
        switch (lives) {
            case 0:
                document.getElementById("life-1").classList.add("d-inline-block");
                document.getElementById("life-2").classList.add("d-inline-block");
                document.getElementById("life-3").classList.add("d-inline-block");
                document.getElementById("life-4").classList.add("d-inline-block");
                document.getElementById("life-5").classList.add("d-inline-block");
                break;
                console.info("Full Lives");
                break;
            default:
                console.warn("Unexpected Life Tally - " + lives);
        }
    }

    // initalise variables
    lives = 5;
    space = 0;
    correctGuess = 0;

    // call functions
    keyboardGenerate();
    selectChosenLevel();
    setupKeyboardClicks();
    gameLivesTrack();
    gameScore();
    selectYourLevel();
}



// function to play again

resetBtn.addEventListener("click", function() {
    // reset by calling play function
    initialiseGame("reset");

})