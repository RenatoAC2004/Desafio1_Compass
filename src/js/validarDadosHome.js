document.addEventListener('DOMContentLoaded', function() {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    
    let estaValido;

    const modalValidacao = document.getElementById("modalValidacao")
    
    function validarDadosNewsletter(evento){
        evento.preventDefault();
    
        const formulario = document.querySelector('.newsletterForm')
        const emailNewsletter = formulario.querySelector('#inputEmail')
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
            modalValidacao.showModal()

            localStorage.setItem("emailNewsletterHome", emailNewsletter.value)

            emailNewsletter.value = ""
        }
    }

    document.querySelector('.newsletterForm').addEventListener('submit', validarDadosNewsletter);

    const emailNewsletterHomeSalvo = localStorage.getItem("emailNewsletterHome")


if(emailNewsletterHomeSalvo){
    document.getElementById("inputEmail").value = emailNewsletterHomeSalvo
}
    });