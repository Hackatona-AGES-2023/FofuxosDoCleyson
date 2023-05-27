import correctAnswer from './apiCorrection.js';

const inputsAnswer = document.querySelectorAll(".answer");

function submitHandler(question, index) {
  const answerText = inputsAnswer[index].value;
  correctAnswer(question, answerText);
}

export default {submitHandler};