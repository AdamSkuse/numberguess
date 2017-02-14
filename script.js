var answerRange = 10;
var answer = 1;
var guessLog = [];
var sessionLog = [];

function generateAnswer(){
    answer = Math.floor(Math.random() * answerRange + 1);
    console.log(answer);
}

generateAnswer();

function changeRange(){
    answerRange = parseInt(document.getElementById("answerRange").value);
    generateAnswer();
}

function makeGuess(){
    var newGuess = parseInt(document.getElementById("guess").value);
    var userFeedback = document.getElementById("userFeedback");
    if (newGuess === answer) {
        guessLog.push(["CORRECT ANSWER!", newGuess]);
        if (guessLog.length === 1) {
            userFeedback.innerHTML = "HOLE IN ONE!<br>It took you just 1 try to guess the answer, which was " + answer + ".";        
        } else {
            userFeedback.innerHTML = "CORRECT!<br>It took you " + guessLog.length + " tries to guess the answer, which was " + answer + ".";
        }
        updateGuessLog();
        updateSessionLog();
        generateAnswer();
        guessLog = [];
    } else if (newGuess < answer) {
        userFeedback.innerHTML = "Higher!";
        guessLog.push(["Low", newGuess]);
        updateGuessLog();
    } else if (newGuess > answer) {
        userFeedback.innerHTML = "Lower!";
        guessLog.push(["High", newGuess]);
        updateGuessLog();
    }
}

function updateGuessLog(){
    var ol = document.getElementById("guessLog");
    ol.innerHTML="";
    guessLog.forEach(function(guess) {
        var li = document.createElement("li");
        li.textContent = guess[0] + " (" + guess[1] + ")";
        ol.appendChild(li);
    });
}

function session(range, answer, guesses) {
    this.range = range;
    this.answer = answer;
    this.guesses = guesses;
}

function updateSessionLog(){
    sessionLog.push(new session(answerRange, answer, guessLog.length));
    var ol = document.getElementById("sessionLog");
    ol.innerHTML = "";
    sessionLog.forEach(function(session) {
        var li = document.createElement("li");
        li.textContent = "1 - " + session.range + " " + session.answer + " " + session.guesses;
        ol.appendChild(li);
    });
}




