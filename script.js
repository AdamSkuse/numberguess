var answerRange = 10;
var answer = 1;

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
        userFeedback.innerHTML = "Correct!<br>If you wish to play again, simply go ahead";
        generateAnswer();
    } else if (newGuess < answer) {
        userFeedback.innerHTML = "Higher!";
    } else if (newGuess > answer) {
        userFeedback.innerHTML = "Lower!";
    }
}



