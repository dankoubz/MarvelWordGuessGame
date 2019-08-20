// wait for document to be opened
window.onload = function() {

    // Marvel Hangman Game
    // Theme: Marvel Superheores Cinematic

    // Marvel themed object array
    var marvel = {
        characters: ["thor", "iron man", "hulk"],
        movies: ["iron man", "avengers age of ultron", "guardians of the galaxy"],
        quotes: ["i am iron man", "hulk like raging fire", "your friendly neighbourhood spiderman"]
    };
    // var for keyboard
    var alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
        'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        'z', 'x', 'c', 'v', 'b', 'n', 'm'
    ];

    // Declare all variables for the page
    var gameMode = "true"; // Game is active on key up
    var categories; // Array of Marvel topics
    var chosenLevel;
    var chosenCategory = marvel.characters; // Selected catagory
    var word; // Selected word
    var guess; // Guess
    var guesses = []; // Stored guesses
    var lives; // Lives
    var counter; // Count correct guesses
    var space; // Number of spaces in word '-'
    var wins = 0; // win count
    var loss = 0; // loss count

    // Get elements from the page
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var clickBtnMobile = document.getElementById("mobileBtn");

    // Key up on start 
    document.onkeyup = function startGame() {
        if (gameMode === "true") {
            // set display to none, remove welcome screen
            document.getElementById("welcome").style.display = "none";
            // add display block for main game content
            document.getElementById("main-game").style.display = "block";
            // console function status
            console.log("gameMode is on");
            // set false values
            gameMode = "false";
        } else if (gameMode === "false") {
            console.log("your game is already loaded");
        }
    }

    // Go to game screen mobile
    clickBtnMobile.onclick = function() {
        document.getElementById("welcome").style.display = "none";
        // add display block for main game content
        document.getElementById("main-game").style.display = "block";
    }

    // Generate an alphabet keyboard
    var keyboard = function() {
        // get keyboard div with id
        keyboardBox = document.getElementById('keyboard');
        // Empty the Keyboard DIV
        // create letters as list item
        letters = document.createElement('div');

        // run a for loop to generate letters
        for (var i = 0; i < alphabet.length; i++) {
            // create element li
            keys = document.createElement('button');
            // set letters class and styling class
            keys.classList.add("letter", "keyboardBtn");
            // insert html of array alphabet
            keys.innerHTML = alphabet[i];
            // run function
            checkOnClick();
            // get buttons div and letters ul
            keyboardBox.appendChild(letters);
            // also add li alphabet inside of ul
            letters.appendChild(keys);
        }
    }

    // On Click function
    checkOnClick = function(e) {
        // get list.onclick run function
        keys.onclick = function(status) {

            if (lives <= 0) {
                console.log('Dead player');
                return;
            }

            // access elements HTML and store as a var
            var guess = (this.innerHTML);
            console.log("fired on click - " + guess);
            // set atributes class and disabled
            this.setAttribute("disabled", "disabled");
            // nothing happened here - walk away

            var guessedLetterFound = false;

            // run a for loop based on the length of the word
            for (var i = 0; i < word.length; i++) {
                // if word index === guess then run
                if (word[i] === guess) {
                    // guesses array with index access inner html set to guess
                    guesses[i].innerHTML = guess;
                    // add +1 to the count
                    counter += 1;
                    // We got one
                    guessedLetterFound = true;
                }
            }

            // We didn't find the guessed letter
            if (!guessedLetterFound) {
                // minus life
                lives -= 1;
            }

            // Update Lives, etc.
            stateOfGame("onPlay");


        }
    }

    // Dificulty Select On Click
    modeOnClick = function() {
        // find buttons by id
        btnEasy = document.getElementById("easy");
        btnMedium = document.getElementById("medium");
        btnHard = document.getElementById("hard");

        // get easy button .onclick run function
        btnEasy.onclick = function() {
            // upade choice variable
            chosenCategory = marvel.characters;
            // make button active user feedback
            btnEasy.classList.add("active");
            btnMedium.classList.remove("active");
            btnHard.classList.remove("active");
            // call function to select category
            selectWord("easy");
        }

        // get medium button .onclick run function
        btnMedium.onclick = function() {
            // upade choice variable
            chosenCategory = marvel.movies;
            // make button active user feedback
            btnMedium.classList.add("active");
            btnEasy.classList.remove("active");
            btnHard.classList.remove("active");
            // call function to select category
            selectWord("medium");
        }

        // get hard button .onclick run function
        btnHard.onclick = function() {
            // upade choice variable
            chosenCategory = marvel.quotes;
            // make button active user feedback
            btnHard.classList.add("active");
            btnEasy.classList.remove("active");
            btnMedium.classList.remove("active");
            // call function to select category
            selectWord("hard");
        }
    }

    // Display Words + Change to characters
    displayWords = function() {
        // get hold element
        placeWord = document.getElementById("addPhrase");
        // create to replace words
        correct = document.createElement('div');

        // run for loop of lenghth of words
        for (var i = 0; i < word.length; i++) {
            // set an id to the correct guesses
            correct.setAttribute('id', 'my-word');
            // guess creates li
            guess = document.createElement('h2');
            // set class to guess
            guess.classList.add("guess", "specialChar");

            // if statmeent to identify charcters
            if (word[i] === "-") {
                guess.innerHTML = "  ";
                space = 1;
            } else {
                guess.innerHTML = "_"; // replace with lines
            }

            // push guess to guesses variable
            guesses.push(guess);
            // append with the guess
            correct.appendChild(guess);
        }
        placeWord.appendChild(correct);
    }

    // Show lives
    stateOfGame = function(status) {

        // if (status === "refresh") {
        //     switch (lives) {
        //         case 5:
        //             document.getElementById("life-1").classList.add("d-inline-block");
        //             document.getElementById("life-2").classList.add("d-inline-block");
        //             document.getElementById("life-3").classList.add("d-inline-block");
        //             document.getElementById("life-4").classList.add("d-inline-block");
        //             document.getElementById("life-5").classList.add("d-inline-block");
        //             break;
        //             console.info("Full Lives");
        //             break;
        //         default:
        //             console.warn("Unexpected Life Tally - " + lives);
        //     }
        // }

        // if (status === "onPlay") {
        // Hide life markers

        console.log(lives + " 666");
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
            gameScore("-1");
        }

        // look at spaces and guess length - innner html change you win
        if (counter + space === guesses.length) {
            showLives.innerHTML = "You Win!";

            // call function to add win!
            gameScore("+1");
        }
        //}
    }

    // Play game function
    play = function() { // main place to store game information

        // Auto Select Easy Mode
        function autoEasy(auto) {
            if (auto === "easy") {
                // make button active user feedback
                btnEasy.classList.add("active");
                selectWord("easy");
                // run a function to display words
                displayWords();
            }
        }

        // check game score
        gameScore = function(value) {

            if (value === "+1") {
                wins += 1;
            } else if (value === "-1") {
                loss += 1;
            }

            // for wins
            winsDisplay = document.getElementById("winCount");
            winsDisplay.innerHTML = "Wins: " + wins;

            // for losses
            lossDisplay = document.getElementById("lossCount");
            lossDisplay.innerHTML = "Losses: " + loss;

        }

        // Select Word and generate
        selectWord = function(check) {
            if (check === "easy") {
                word = chosenCategory[Math.floor(Math.random() * marvel.characters.length)];
                word = word.replace(/\s/g, "-");
                console.log(word + " - Easy");
            } else if (check === "medium") {
                word = chosenCategory[Math.floor(Math.random() * marvel.characters.length)];
                word = word.replace(/\s/g, "-");
                console.log(word + " - Medium");
            } else if (check === "hard") {
                word = chosenCategory[Math.floor(Math.random() * marvel.characters.length)];
                word = word.replace(/\s/g, "-");
                console.log(word + " - Hard");
            }
        }

        // stored guesses
        guesses = [];
        // amount of lives set
        lives = 5;
        // how many letters selected
        counter = 0;
        // spaces in the phrase
        space = 0;

        // call functions
        // game score
        gameScore();
        // run function for keyboard
        keyboard();
        // run function for mode
        modeOnClick();
        // set auto level
        autoEasy("easy");
        // check state of game
        stateOfGame();

    }

    play();

    // reset
    document.getElementById("reset").onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);

        lives = 6
        switch (lives) {
            case 6:
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

        // reset the images.
        play();
    }

}