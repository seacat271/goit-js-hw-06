const inputForm = document.querySelector("#name-input");

const greetingTextOutput = document.querySelector("#name-output");

inputForm.addEventListener("input", (event) => {
    greetingTextOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") greetingTextOutput.textContent = "Anonymous"
})