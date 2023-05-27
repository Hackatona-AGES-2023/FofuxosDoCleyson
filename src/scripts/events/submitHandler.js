const inputsAnswer = document.querySelectorAll(".answer");

function submitHandler(question, index) {
  const answerText = inputsAnswer[index].value;

  correctAnswer(question, answerText);
}
