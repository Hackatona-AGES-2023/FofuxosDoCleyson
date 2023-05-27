function onOff(button) {
  button = document.querySelector(button);

  if (!button.classList.contains("isToggled")) {
    desligaOAnterior();
    button.classList.add("isToggled");
  }
}

function desligaOAnterior() {
  const botaoAnterior = document.querySelector(".isToggled");

  if (botaoAnterior) {
    botaoAnterior.classList.remove("isToggled");
  }
}
