let counterValue = 0;

const counterValueText = document.querySelector("#value");

const decrementBtn = document.querySelector("[data-action='decrement']");
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    counterValueText.textContent = counterValue;
})

const incrementBtn = document.querySelector("[data-action='increment']");
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    counterValueText.textContent = counterValue;
})

