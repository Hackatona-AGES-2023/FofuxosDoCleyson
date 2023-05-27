import generateQuiz from "./api";

const input = document.querySelector("#mainInput");
const selectedButton = document.querySelector(".isToggled");

input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    generateQuiz(input.value, selectedButton.textContent.toLowerCase());
  }
});
