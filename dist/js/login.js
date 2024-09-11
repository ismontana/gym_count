const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container-log');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function showPass_log() {
    var tipo = document.getElementById("password_log");
    var mostrarOcultar = document.querySelector('.b_p_log');
    var contenedor = mostrarOcultar.closest('.c_p_log');
    
    if(tipo.type === "password") {
        tipo.type = "text";
        mostrarOcultar.classList.remove('btn-hidePass');
        mostrarOcultar.classList.add('btn-showPass');
        mostrarOcultar.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        tipo.type = "password";
        mostrarOcultar.classList.remove('btn-showPass');
        mostrarOcultar.classList.add('btn-hidePass');
        mostrarOcultar.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}

function showPass_sing() {
    var tipo = document.getElementById("password_sing");
    var mostrarOcultar = document.querySelector('.b_p_sing');
    var contenedor = mostrarOcultar.closest('.c_p_sing');
    
    if(tipo.type === "password") {
        tipo.type = "text";
        mostrarOcultar.classList.remove('btn-hidePass');
        mostrarOcultar.classList.add('btn-showPass');
        mostrarOcultar.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        tipo.type = "password";
        mostrarOcultar.classList.remove('btn-showPass');
        mostrarOcultar.classList.add('btn-hidePass');
        mostrarOcultar.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}

