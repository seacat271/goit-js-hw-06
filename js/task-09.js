function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetBtn = document.querySelector(".change-color");

const widgetDescriptionColor = document.querySelector(".color");

widgetBtn.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
 widgetDescriptionColor.textContent = color
 document.body.style.backgroundColor = color
}
