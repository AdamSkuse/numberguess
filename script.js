var answerRange = 10;
var answer = 1;
var guessLog = [];
var sessionLog = [];

// constructor for session objects that are stored in sessionLog
function session(range, answer, guesses) {
    this.range = range;
    this.answer = answer;
    this.guesses = guesses;
}


function setupEventListeners(){
    var answerRangeInput = document.getElementById("answerRangeInput");
    answerRangeInput.addEventListener("change", changeRange);
    var guessButton= document.getElementById("guessButton");
    guessButton.addEventListener("click", makeGuess);
}

setupEventListeners();


function generateAnswer(){
    answer = Math.floor(Math.random() * answerRange + 1);
    console.log(answer);
}

generateAnswer();

function changeRange(){
    answerRange = parseInt(document.getElementById("answerRangeInput").value);
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

function updateSessionLog(){
    sessionLog.push(new session(answerRange, answer, guessLog.length));
    var newSessionLogRow = "<div class='sessioncell col-1-3'><p>1 - " + sessionLog[sessionLog.length -1].range + "</p></div><!-- --><div class='sessioncell col-1-3'><p>" + sessionLog[sessionLog.length -1].answer + "</p></div><!-- --><div class='sessioncell col-1-3'><p>" + sessionLog[sessionLog.length -1].guesses + "</p></div>";
    var newSessionLogDiv = document.createElement("div");
    newSessionLogDiv.class = "sessionrow";
    newSessionLogDiv.innerHTML = newSessionLogRow;
    document.getElementById("sessionlog").appendChild(newSessionLogDiv);
}
    







