const fontSizeRangeInput = document.querySelector("#font-size-control");

const fontSizeTextOutput = document.querySelector("#text");

fontSizeRangeInput.addEventListener("input", (event) => {
fontSizeTextOutput.style.fontSize = `${fontSizeRangeInput.value}px`
});



