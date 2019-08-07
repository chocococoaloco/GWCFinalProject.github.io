
function AreYouTheProblem() {
  var startButton = document.getElementById("StartGame");
  startButton.style.display = "none";
  document.getElementById("answerscorehide").innerHTML = 0;
  document.getElementById("answerscorehide").style.display = "none";
  document.getElementById("quizRestart").style.display = "none";
  document.getElementById('quizBad').style.display = "none";
  document.getElementById('quizGood').style.display = "none";

  startGame();

}
function startGame() {
  document.getElementById("question1").style.display = "block";
  document.getElementsByClassName("answerbutton").onclick = function() {console.log("hi")}
}

function choiceYes1() {
  // var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  // var AYTPscore = parseInt(answerscorehide)
  // AYTPscore +=1;
  var AYTPscore = 0;
  AYTPscore +=1;
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question1').style.display = "none";
  document.getElementById('question2').style.display = "block";
}
function choiceNo1() {
  // var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  // var AYTPscore = parseInt(answerscorehide)
  // console.log(AYTPscore);
  var AYTPscore = 0;
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question1').style.display = "none";
  document.getElementById('question2').style.display = "block";
}

function choiceYes2() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  // AYTPscore +=1;
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question2').style.display = "none";
  document.getElementById('question3').style.display = "block";
}
function choiceNo2() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  AYTPscore +=1;
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question2').style.display = "none";
  document.getElementById('question3').style.display = "block";
}

function choiceYes3() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  AYTPscore +=1;
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question3').style.display = "none";
  document.getElementById('question4').style.display = "block";
}
function choiceNo3() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question3').style.display = "none";
  document.getElementById('question4').style.display = "block";
}

function choiceYes4() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  AYTPscore +=1;
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question4').style.display = "none";
  document.getElementById('question5').style.display = "block";
}
function choiceNo4() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question4').style.display = "none";
  document.getElementById('question5').style.display = "block";
}

function choiceYes5() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question5').style.display = "none";
  document.getElementById('question6').style.display = "block";
}
function choiceNo5() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  console.log(AYTPscore);
  AYTPscore +=1;
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question5').style.display = "none";
  document.getElementById('question6').style.display = "block";
}

function choiceYes6() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  AYTPscore +=1;
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question6').style.display = "none";
  finishQuiz(AYTPscore);
  // document.getElementById('question6').style.display = "block";
}
function choiceNo6() {
  var answerscorehide = document.getElementById('answerscorehide').innerHTML;
  var AYTPscore = parseInt(answerscorehide)
  console.log(AYTPscore);
  document.getElementById("answerscorehide").innerHTML = AYTPscore;
  document.getElementById('question6').style.display = "none";
  finishQuiz(AYTPscore);
  // document.getElementById('question6').style.display = "block";
}

function finishQuiz(finalscore) {
  if (finalscore > 3) {
    finalscore = "Your score is " + finalscore +"/6"
    document.getElementById("answerscorehide").style.display = "block";
    document.getElementById('answerscorehide').innerHTML = finalscore;
    document.getElementById('quizGood').style.display = "block";
    document.getElementById('quizRestart').style.display = "block";

  }
  if (finalscore <= 3) {
    finalscore = "Your score is " + finalscore +"/6"
    document.getElementById("answerscorehide").style.display = "block";
    document.getElementById('answerscorehide').innerHTML = finalscore;
    document.getElementById('quizBad').style.display = "block";
    document.getElementById('quizRestart').style.display = "block";
  }
}
