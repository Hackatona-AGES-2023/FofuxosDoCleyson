import {submitHandler} from './events/submitHandler.js';

const questionsBox = document.querySelector(".questions");
const template = document.querySelector("#question");

export function renderQuestions(questions) {
  questionsBox.innerHTML = "";

  questions.forEach((question, index) => {
    const div = template.content.cloneNode(true);
    div.querySelector(".questionNumber").innerText = index + 1;
    div.querySelector(".mainQuestion").innerText = question;
    div.querySelector(".submit").onclick = function () {submitHandler(question, index);}
    questionsBox.appendChild(div);
  });
  scrollFirst();
}

export function renderAnswer(status, explainingText, index) {
  const adjustmentText = document.querySelector(".adjustmentText"); 
  const resultImage = document.querySelector(".adjustmentImage");
  const answer = document.querySelectorAll(".answer");
  if (status == true) {
    adjustmentText.innerHTML = "Correto";
    resultImage.src = "../images/Botãocorreto.png";
  } else {
    adjustmentText.innerHTML = "Incorreto";
    resultImage.src = "../images/Botãoincorreto.png";
    answer[index].value = explainingText;
  }
}


export default { renderQuestions, renderAnswer}



