var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name : "Kunal",
    score : 10,
  },
  {
    name : "Naina",
    score : 8,
  },
  {
    name : "Adarsh",
    score : 7,
  },
]

var listOfQuestions = [
  {
    question : "How many Infinity Stones are there? ",
    answer : "6",
  },
  {
    question : "Who is Tony Stark’s father? ",
    answer : "Howard Stark",
  },
  {
    question : "What type of doctor is Doctor Strange? ",
    answer : "Neurosurgeon",
  },
  {
    question : "Who was able to pick up Thor’s hammer in Endgame? ",
    answer : "Captain America",
  },
  {
    question : "On what planet was the Soul Stone in Infinity War? ",
    answer : "Vormir"
  },
  {
    question: "Black Panther is set in which fictional country? ",
    answer: "Wakanda"
  },
  {
    question: "Who rescued Tony Stark and Nebula from space? ",
    answer: "Captain Marvel"
  },
  {
    question: "What is Tony Stark’s daughter’s name? ",
    answer: "Morgan Stark"
  },
  {
    question: "Nick Fury wears an eye patch over which of his eyes? ",
    answer: "Left"
  },
  {
    question: "Thor played what video game in Avengers: Endgame? ",
    answer: "Fortnite"
  },
]

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome "+ userName + " to Trivia Quiz on Marvel fandom!!");
}


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are correct!");
    score = score + 1;
  }
  else{
    console.log("You are wrong..");
  }

  console.log("Your current score is " + score);
  console.log("----------------------");
}

function game() {
  for(var i=0; i<listOfQuestions.length; i++){
    var currentQuestion = listOfQuestions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("Wohoo!! You scored " + score);
  console.log("Check out the high scores, if you think you should be there, ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();