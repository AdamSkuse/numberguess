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
    if (newGuess === answer) {
        console.log("Correct!");
    } else if (newGuess < answer) {
        console.log("higher");
    } else if (newGuess > answer) {
        console.log("lower");
    }
}



