import correctAnswer from './apiCorrection.js';


export function submitHandler(question, index) {
  const inputsAnswer = document.querySelectorAll(".answer");
  const answerText = inputsAnswer[index].value.toString();
  const buttons = document.querySelectorAll('.submit')
  buttons[index].style.display = 'none';
  correctAnswer(question, answerText, index);

}

export default {submitHandler};