// Marvel Hangman Game
// Theme: Marvel Superheores Cinematic

// Rules + Steps

// START GAME
var startGame;
var mainGame;

// start game, "press any key to get started"
// event listen to keyup command for any key
document.onkeyup = function() {
    // add display none to welcome screen to remove screen
    var startGame = startGame === 1;
    document.getElementById("welcome").style.display = "none";
    // make startGame varaible true as a session has started 
    // add display block for main game content
    var mainGame = document.getElementById("main-game").style.display = "block";
};

console.log(startGame);
// LEVEL OF DIFFICULTY
// Easy = characters, medium = movies + hard = quotes
// make buttons that once selected changes the dificulty
// listen to on click event and swithc state to truthy
var easyMode;
var mediumMode;
var hardMode;

function gameMode() {
    if (startGame === 1) {
        var easyMode = 1;
        console.log(easyMode);
    }
}

/*
document.getElementById("#medium").onclick = function() {
    var mediumMode = true;
    console.log(mediumMode);
};
*/

// WORD PHRASES OBJECT + ARRAY
// create an object called Marvel
// within object create properties charactsers, quotes and movie titles.
var marvel = {
    characters: ["Thor", "Iron Man", "Hulk"],
    movies: ["Iron Man", "Avengers Age of Ultron", "Guardians of the Galaxy"],
    quotes: ["I am Iron Man", "Your friendly neighbourhood Spider-man"]
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