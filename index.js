const DATA = {


}

const SCORE = 0;

function setScore() {
// update score on correct or incorrect answer

console.log('`updateScore` ran')
}

function answerResult() {
// result of the answer submission

console.log('`answerResult` ran')
}

function setQuestion() {
// update the current question

console.log('`setQuestion` ran')
}

function initialView() {
// Display quiz start button and start quiz app calling setQuestion

console.log('`initalView` ran')
}

function initiateQuiz() {
    initialView;

console.log('`initiateQuiz` ran')
}

window.onload = function() {
    initiateQuiz();
  };