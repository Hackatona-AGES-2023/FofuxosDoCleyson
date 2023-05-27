function onOff(button) {
  const button1 = document.querySelector(button);
  console.log(button1)
  if (!button1.classList.contains("isToggled")) {
    desligaOAnterior();
    button1.classList.add("isToggled");
    button1.style.color = 'black';
  }
}

function desligaOAnterior() {
  const botaoAnterior = document.querySelector(".isToggled");

  if (botaoAnterior) {
    botaoAnterior.classList.remove("isToggled");
    botaoAnterior.style.color = 'white';
  }
}

document.querySelector('.isToggled').style.color = 'black';
