import correctAnswer from './apiCorrection.js';


export function submitHandler(question, index) {
  const inputsAnswer = document.querySelectorAll(".answer");
  const answerText = inputsAnswer[index].value.toString();
  correctAnswer(question, answerText);
}

export default {submitHandler};