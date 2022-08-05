function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let quantityBoxes;

const inputQuantityBoxes = document.querySelector("[type='number']");
inputQuantityBoxes.addEventListener("input", () => {
  quantityBoxes = inputQuantityBoxes.value
})

const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor()
    const box = document.createElement("div")
    box.style.width = `${20 + i * 10}px`;
    box.style.height = `${20 + i * 10}px`;
    box.style.backgroundColor = color
    box.style.marginTop = "10px"
    box.style.display = "flex";
    box.style.alignItems = "center"
    box.style.justifyContent = "center"
    const colorText = document.createElement("span");
    colorText.textContent = color;
    colorText.style.fontSize = `${6 + i}px`
    
    box.append(colorText)
    boxesContainer.append(box)
  }
}

const createBoxesBtn = document.querySelector("[data-create]")
createBoxesBtn.addEventListener("click", () => {
  createBoxes(quantityBoxes)
})

const destroyBoxesBtn = document.querySelector("[data-destroy]")
destroyBoxesBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  inputQuantityBoxes.value = "";
})


