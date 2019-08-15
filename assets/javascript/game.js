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
            setAutoDifficulty();
            // condition if key up has been used	
        } else if (mainGame === 1) {
            console.log("your game is already loaded");
        }
    }
};

// LEVEL OF DIFFICULTY
// delcare variables of modes
var easyMode;
var mediumMode;
var hardMode;

// Once gameSession is true, run this function to set auto game mode
function setAutoDifficulty() {
    // Making sure condition is true
    if (gameSession === true) {
        // find easy id for button
        var activeMode = document.getElementById("easy");
        // set class of buttin to active, css stylinh
        activeMode.classList.add("active");
        // set variable easyMode to true - call later to use object arrays
        easyMode = true;
        console.log("Your mode is set to easy");
        // set other modes to false
        mediumMode = false;
        hardMode = false;
        console.log("Both medium and hard modes are " + mediumMode + " and " + hardMode);
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
        // change state of global variable
        easyMode = true;
        mediumMode = false;
        hardMode = false;
        console.log("Easy mode = " + easyMode);
    }

    // function to change to medium level
    function changeToMedium() {
        // add remove active styling to buttons
        easyButton.classList.remove("active");
        mediumButton.classList.add("active");
        hardButton.classList.remove("active");
        console.log("medium button clicked");
        // change state of global variable
        easymMode = false;
        mediumMode = true;
        hardMode = false;
        console.log("Medium mode = " + mediumMode);
    }

    // call function to change to hard level
    function changeToHard() {
        // add remove active styling to buttons
        easyButton.classList.remove("active");
        mediumButton.classList.remove("active");
        hardButton.classList.add("active");
        console.log("hard button clicked");
        // change state of global variable
        easymMode = false;
        mediumMode = false;
        hardMode = true;
        console.log("Hard mode = " + hardMode);
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
// each property should have its own array
// first choose a random category / propery within the Marvel object
// add math.floor(math.random * length of array) to calculate random choice of array
// then again, randomly choose index within array properity

// DISPLAY AND RANDOMISE PHRASES
// get chosen phrase from function
// change phrase into lowercase letters
// find character length of phrase
// display the character length as underline characters

// LISTEN AND DISPLAY LETTERS
// allow users to select letters to complete word
// listen to keyup letters from user
// run a loop function to place letters in the correct places
// after each loop, treat each letter as a guess

// SHOW CORRECT AND WRONG LETTERS
// check user inputs
// letters selected show below in a box
// if letters are correct, push letter to box and change color to green
// if letters are incoorect, place letters to box and change color to red
// else don't add anything

// LIVES IN GAME
// little iron man heads will be your lives counter
// check the amount of red letters (loop)
// for red letters in input box, -1 life for each letter, for a total of 8 lives

// UPDATE HANGMAN IMAGE
// custom image with 8 frames, that changes in relation to incorrect answers
// check amount correct and incorrect letters within the input box,
// correct = green, incorrect = red
// if incorrect guesses +1 frame, once 8 frames are reached user loses game
// if correct don't change image number +0

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