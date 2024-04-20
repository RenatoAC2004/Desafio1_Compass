document.addEventListener('DOMContentLoaded', function() {
const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

let estaValido;

function validarDados(evento) {
    evento.preventDefault()

    const formulario = document.querySelector('.form')
    const firstName = formulario.querySelector('#firstName');
    const lastName = formulario.querySelector('#lastName');
    const email = formulario.querySelector('#email');
    const message = formulario.querySelector('#message');

    const erroFirstName = formulario.querySelector('#erroFirstName');
    const erroLastName = formulario.querySelector('#erroLastName');
    const erroEmail = formulario.querySelector('#erroEmail');
    const erroMessage = formulario.querySelector('#erroMessage');

    estaValido = true;

    if (firstName.value.length <= 1) {
        erroFirstName.textContent = "O primeiro nome precisa ter mais de um caractere."
        firstName.style.borderColor = "#DC7000"
        estaValido = false
    } else {
        erroFirstName.textContent = ""
        firstName.style.borderColor = ""
    }

    if (lastName.value.length <= 1) {
        erroLastName.textContent = "O último nome precisa ter mais de um caractere."
        lastName.style.borderColor = "#DC7000"
        estaValido = false
    } else {
        erroLastName.textContent = ""
        lastName.style.borderColor = ""
    }

    if (!regex.test(email.value)){
        erroEmail.textContent = "Por favor, insira um e-mail válido."
        email.style.borderColor = "#DC7000"
        estaValido = false
    } else {
        erroEmail.textContent = ""
        email.style.borderColor = ""
    }

    if (message.value.length <= 10) {
        erroMessage.textContent = "A mensagem precisa ter mais de 10 caracteres."
        message.style.borderColor = "#DC7000"
        estaValido = false
    } else {
        erroMessage.textContent = "";
        message.style.borderColor = ""
    }

    if(estaValido) {
        console.log("formulario valido")

        firstName.value = ""
        lastName.value = ""
        email.value = ""
        message.value = ""

    }

}

function validarDadosNewsletter(evento){
    evento.preventDefault();

    const formulario = document.querySelector('.newsletterForm')
    const emailNewsletter = formulario.querySelector('#inputEmail2')
    const erroEmailNewsletter = formulario.querySelector('#erroEmailNewsletter')

    estaValido = true;

    if (!regex.test(emailNewsletter.value)){
        erroEmailNewsletter.textContent = "Por favor, insira um e-mail válido."
        emailNewsletter.style.border = "2px solid #DC7000"
        estaValido = false
    } else {
        erroEmailNewsletter.textContent = ""
        emailNewsletter.style.border = ""
    }

    if(estaValido) {
        console.log("formulario valido")

        emailNewsletter.value = ""
    }
}

document.querySelector('.form').addEventListener('submit', validarDados);
document.querySelector('.newsletterForm').addEventListener('submit', validarDadosNewsletter);
});