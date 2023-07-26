const username = document.getElementById('user')
const password = document.getElementById('pass')
const message = document.getElementById('message')
const button = document.getElementById('buttonL')

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === button) {
        if (password.value && username.value !== "") {
            window.location.href = "formulario.html";
        }
        else {
            message.textContent = "Ingrese Usuario o Contraseña";
            message.style.backgroundColor = "red";
        }
    }

});
