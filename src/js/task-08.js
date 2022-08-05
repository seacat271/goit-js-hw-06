const loginForm = document.querySelector(".login-form")

function HandleSubmitLoginForm(event) {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

      if (email.value === "" || password.value === "") {
        return alert("Будь-ласка, заповніть всі поля");
      }

    const dataInputObj = {
        email : email.value,
        password : password.value
}

console.log(dataInputObj);

event.currentTarget.reset();
}

loginForm.addEventListener("submit", HandleSubmitLoginForm)