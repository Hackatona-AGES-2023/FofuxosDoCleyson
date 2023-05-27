const answerStatus = document.querySelector(".adjustmentText");
const answerText = document.querySelector(".explaning");
const questionsBox = document.querySelector(".questions");
const template = document.querySelector("#question");
const resultImage = document.querySelector(".adjustmentImage");
const adjustmentText = document.querySelector(".adjustmentText");
const explaining = document.querySelector(".explaining");
const answer = document.querySelector(".answer");

function renderQuestions(questions) {
  questionsBox.innerHTML = "";
  const questions = questions;

  questions.forEach((question, index) => {
    const div = template.content.cloneNode(true);

    div.querySelector(".questionNumber").innerText = index + 1;
    div.querySelector(".mainQuestion").innerText = question;
    div.querySelector(".submit").onclick = function () {
      submitHandler(question, index);
    };

    questionsBox.appendChild(div);
  });
}

function renderAnswer(status, explainingText) {
  if (status == true) {
    adjustmentText.innerText = "Correto";
    resultImage.src = "../images/Botãocorreto.png";
  } else {
    adjustmentText.innerText = "Incorreto";
    resultImage.src = "../images/Botãoincorreto.png";
    explaining.innerText = explainingText;
  }
}
