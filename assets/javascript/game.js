var Jojo = ["joestar", "jonathan", "joseph", "jotaro", "josuke", "giorno", "jolyne"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;



function Game() {
    randomWord = Jojo[Math.floor(Math.random() * Jojo.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
		blanksAndCorrect.push("_");
		
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


var joestar = document.getElementById("joestar");
var jonathan = document.getElementById("jonathan");
var joseph = document.getElementById("joseph");
var jotaro = document.getElementById("jotaro");
var josuke = document.getElementById("josuke");
var giorno = document.getElementById("giorno");
var jolyne = document.getElementById("jolyne");
var lose = document.getElementById("lose")


function aud() {
    
    if (randomWord === Jojo[0]) {
		alert("Well done!!!");
		lose.pause();
        jotaro.pause();
        josuke.pause();
        giorno.pause();
        jolyne.pause();
        joseph.pause();
        jonathan.pause();
        joestar.play();
        document.getElementById("image").src = "./assets/images/joestar.gif";
    }
 
    else if (randomWord === Jojo[1]) {
		lose.pause();
        jotaro.pause();
        josuke.pause();
        giorno.pause();
        jolyne.pause();
        joseph.pause();
        joestar.pause();
        jonathan.play();
		document.getElementById("image").src = "./assets/images/jonathan.gif";
		alert("You've made Jonathan proud.");

    }
 
    else if (randomWord === Jojo[2]) {
		lose.pause();
        jotaro.pause();
        josuke.pause();
        giorno.pause();
        jolyne.pause();
        jonathan.pause();
        joestar.pause();
        joseph.play();
		document.getElementById("image").src = "./assets/images/joseph.gif";
		alert("Niiiiiiceu!");

    }
  
    else if (randomWord === Jojo[3]) {
		lose.pause();
        josuke.pause();
        giorno.pause();
        jolyne.pause();
        joseph.pause();
        jonathan.pause();
        joestar.pause();
        jotaro.play();
		document.getElementById("image").src = "./assets/images/jotaro.gif";
		alert("Yare yare daze...");

    }
  
    else if (randomWord === Jojo[4]) {
		lose.pause();
        giorno.pause();
        jolyne.pause();
        joseph.pause();
        jonathan.pause();
        joestar.pause();
        jotaro.pause();
        josuke.play();
		document.getElementById("image").src = "./assets/images/josuke.gif";
		alert("Gureto daze!");

    }
 
    else if (randomWord === Jojo[5]) {
		lose.pause();
        josuke.pause();
        jolyne.pause();
        joseph.pause();
        jonathan.pause();
        joestar.pause();
        jotaro.pause();
        giorno.play();
		document.getElementById("image").src = "./assets/images/giorno.gif";
		alert("I, Giorno Giovanna, have a dream.");
    }

    else if (randomWord === Jojo[6]) {
		lose.pause();
        josuke.pause();
        giorno.pause();
        joseph.pause();
        jonathan.pause();
        joestar.pause();
        jotaro.pause();
        jolyne.play();
		document.getElementById("image").src = "./assets/images/jolyne.gif";
		alert("Yare yare dawa!");
    }
};


function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}


function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/lose.gif"
		document.getElementById("losstracker").innerHTML = " " + losses;
		josuke.pause();
        giorno.pause();
        joseph.pause();
        jonathan.pause();
        joestar.pause();
        jotaro.pause();
        jolyne.pause();
		lose.play();
		alert("Oof, better luck next time!")
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


Game()

document.onkeyup = function (event) {

	var guesses = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}