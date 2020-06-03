var questions = ["1 + 1", "2 + 2"];
var answers = ["2", "4"];
var questioncounter = 0;
var timer = 60;
var correctAnswers = 0;
function startquiz() {
  document.getElementById("startbutton").style.display = "none";
  var quizCounter = setInterval(function () {
    timer--;
    if (timer < 0 || questioncounter >= questions.length) {
      clearInterval(quizCounter);
      gameEnd();
    }
    document.getElementById("count").innerHTML = timer;
  }, 1000);
  document.getElementById("question").innerHTML = questions[questioncounter];
}

function submit() {
  var answer = document.getElementById("answer").value;
  if (answer == answers[questioncounter]) {
    console.log("Correct answer");
    correctAnswers++;
  } else {
    timer = timer - 10;
  }
  questioncounter++;
  if (questioncounter >= questions.length) {
    document.getElementById("questionArea").style.display = "none";
  }
  document.getElementById("question").innerHTML = questions[questioncounter];
  document.getElementById("answer").value = "";
}

function gameEnd() {
  document.getElementById("score").style.display = "";
}

function submitScore() {
  var name = document.getElementById("name").value;
  document.getElementById("score").style.display = "none";
  document.getElementById("finalScore").innerHTML =
    name + " score is " + correctAnswers;
}
