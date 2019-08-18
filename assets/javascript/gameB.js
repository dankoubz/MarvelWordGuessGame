// Marvel Hangman Game
// Theme: Marvel Superheores Cinematic

// Rules + Steps

// START GAME
// declare variables
var gameSession = false;
var mainGame = 0;
console.log("Game Session is " + gameSession);

// call on start + parameter to only call once
onStart(mainGame === 0);

// start game, "press any key to get started"
function onStart() {
    document.onkeyup = function startGame() {
        if (mainGame < 1) {
            // set display to none, remove welcome screen
            document.getElementById("welcome").style.display = "none";
            // add display block for main game content
            document.getElementById("main-game").style.display = "block";
            // make gameSession varaible true as a session has started 
            gameSession = true;
            // console function status
            console.log("Game Session is " + gameSession);
            // set mainGame to 1, so function doesn't run again
            mainGame = 1;
            // call function
            setAutoDifficulty("autoEasy");
            // condition if key up has been used	
        } else if (mainGame === 1) {
            console.log("your game is already loaded");
        }
    }
};

// LEVEL OF DIFFICULTY
// delcare variables of modes
// run this function to set auto game mode
function setAutoDifficulty(auto) {
    // Making sure condition is true
    if (auto === "autoEasy") {
        // find easy id for button
        var activeMode = document.getElementById("easy");
        // set class of buttin to active, css stylinh
        activeMode.classList.add("active");
        console.log("Your mode is set to easy");
        console.log("Both medium and hard modes are false");
        selectPhrases("easy");

    } else {
        // if statement is false tell console
        console.log("no auto difficulty set");
    }
};

// make buttons that once selected changes the dificulty
// Easy = characters, medium = movies + hard = quotes
function changeDifficulty() {
    // set var to id of button in html
    var easyButton = document.getElementById('easy');
    var mediumButton = document.getElementById('medium');
    var hardButton = document.getElementById('hard');

    // add listener to variables so button click triiger id
    easyButton.addEventListener("click", changeToEasy);
    mediumButton.addEventListener("click", changeToMedium);
    hardButton.addEventListener("click", changeToHard);

    // function to change to easy level
    function changeToEasy() {
        // add remove active styling to buttons
        easyButton.classList.add("active");
        mediumButton.classList.remove("active");
        hardButton.classList.remove("active");
        console.log("easy button clicked");
        // call a function in the phrases
        selectPhrases("easy");
    }

    // function to change to medium level
    function changeToMedium() {
        // add remove active styling to buttons
        easyButton.classList.remove("active");
        mediumButton.classList.add("active");
        hardButton.classList.remove("active");
        console.log("medium button clicked");
        // call a function in the phrases
        selectPhrases("medium");
    }

    // call function to change to hard level
    function changeToHard() {
        // add remove active styling to buttons
        easyButton.classList.remove("active");
        mediumButton.classList.remove("active");
        hardButton.classList.add("active");
        console.log("hard button clicked");
        // call a function in the phrases
        selectPhrases("hard");

    }
};

// call function to allow button to change difficulty
changeDifficulty();

// WORD PHRASES OBJECT + ARRAY
// create an object called Marvel
// within object create properties charactsers, quotes and movie titles.
var marvel = {
    characters: ["Thor", "Iron Man", "Hulk"],
    movies: ["Iron Man", "Avengers Age of Ultron", "Guardians of the Galaxy"],
    quotes: ["I am Iron Man", , "Hulk like raging fire", "Your friendly neighbourhood Spiderman"]
};

// DISPLAY AND RANDOMISE PHRASES
// get chosen phrase from function
// find character length of phrase
// display the character length as underline characters
var addPhrase = document.getElementById('addPhrase');
var storedWords;
// create a function that select's and array based on difficulty selected
function selectPhrases(mode) {
    // if easy is selected run statement
    if (mode === "easy") {
        // create a h2 element
        var addElement = document.createElement("h2");
        // generate and store marvel.characters array + randomly generate
        storedWords = marvel.characters[Math.floor(Math.random() * marvel.characters.length)];
        // append element to add h2
        addPhrase.appendChild(addElement);
        // place text + add class for styling

        underline = storedWords.replace(/_/g, "_");
        addElement.classList.add("gameWords");
        addElement.innerHTML = underline;
        console.log("Easy mode uses character phrases");
    } else if (mode === "medium") {
        console.log("Medium mode uses movies");
    } else if (mode === "hard") {
        console.log("Hard mode uses quotes");
    }
}

// CLICK LETTERS AND DISPLAY LETTERS
// add array for keyboard
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var keyboardBtns = document.getElementById('keyboard');
var letterBox = document.getElementById('letterBox');
var selectedLetter = [" "];

// call function to display keyboard
keyboardDisplay("ready");
// create for loop to place each letter as a button keyboard
function keyboardDisplay(state) {
    if (state === "ready") {
        for (var i = 0; i < alphabet.length; i++) {
            var newBtn = document.createElement("button");
            keyboardBtns.appendChild(newBtn);
            newBtn.textContent = alphabet[i];
            newBtn.classList.add("keyboardBtn");
        }
    };
};

// run a function that deletes a letters
function minusLetter() {
    letter = removeLetter;
    letter.classList.add("d-none");
}
// var lives
var lives = 0;
// call a function to determine selected button
keyboardBtns.addEventListener("click", usedLetter);
// to check clicked letter
function usedLetter(e) {
    // set a variable inner html to find the value
    selectedLetter = e.target.innerHTML;
    removeLetter = e.target;

    // create an if statement
    // it will give the position of the letter in the string
    if (storedWords.toLowerCase().includes(selectedLetter)) {
        // call a function that adds letter in to word box
        var usedBtn = document.createElement("button");
        letterBox.appendChild(usedBtn);
        usedBtn.textContent = selectedLetter;
        usedBtn.classList.add("keyUsedBtn", "keyCorrect");
        // minus letter after click
        minusLetter();
        console.log('correct character');
    } else {
        var usedBtn = document.createElement("button");
        letterBox.appendChild(usedBtn);
        usedBtn.textContent = selectedLetter;
        usedBtn.classList.add("keyUsedBtn", "keyIncorrect");
        // minus letter after click
        minusLetter();
        console.log('wrong character');
        // function minus life 
        // LIVES IN GAME
        // little iron man heads will be your lives counter
        // check the amount of red letters (loop)
        // for red letters in input box, -1 life for each letter, for a total of 8 lives
        switch (lives) {
            case 1:
                lives++;
                life = document.getElementById("life-5");
                life.classList.add("d-none");
            case 2:
                lives++;
                life = document.getElementById("life-4");
                life.classList.add("d-none");
            default:
                life = document.getElementById("life-3");
                life.classList.add("d-none");
                lives++;
        }

        /*
			if (lives < 1) {
                life = document.getElementById("life-5");
                life.classList.add("d-none");
                lives = 1;
                console.log(lives + " one");
            } else if (lives < 2) {
                life = document.getElementById("life-5");
                life.classList.add("d-none");
                lives = 2;
                console.log(lives + " two");
			}
			*/
    }
}


// PARAMETERS OF WINS + LOSES
// user has 8 chances to guess the correct phrase or they loose the game
// if user guesses correctly play Marvel theme song 
// check for all display characters are all filled if so, user wins!
// else user guesses incorrectly Iron Man death scene will play - this can be a gif
// check for 8 incorrect guesses, user loses game!

// BOUNS GAME ENTERTAINMENT + FUNCTIONS
// keep a tally of lives displayed as Iron Man heads
// keep score of wins and losses
// shown in the a display box