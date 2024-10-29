const nombres = ["Medel", "Ismael", "Galker", "Pitipu", "Dealer", "KarlosTKS", "GrabrielJuas"];
let seleccionados = [...nombres];
let disponiblesSelectors = [...nombres];
let isSpinning = false;
let currentRotation = 0;

const selectorName = document.getElementById("selector-name");
const spinBtn = document.getElementById("spin-btn");
const wheel = document.getElementById("wheel");
let actualSelector = "";  // Variable para almacenar el nombre sin prefijo

// Función para elegir un nombre aleatorio del array
function elegirNombreAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

// Función para actualizar el selector
function actualizarSelector() {
    if (disponiblesSelectors.length === 0) {
        selectorName.textContent = "Listo";
        spinBtn.disabled = true; // Deshabilitar solo al final
        return;
    }
    actualSelector = elegirNombreAleatorio(disponiblesSelectors);
    selectorName.textContent = 'Turno de ' + actualSelector;
    disponiblesSelectors = disponiblesSelectors.filter(nombre => nombre !== actualSelector);
}

// Función para hacer girar la ruleta
function animarGiroRuleta() {
    const randomDegree = Math.floor(Math.random() * 360) + 1440; // Rotación entre 4 y 6 giros completos
    currentRotation += randomDegree;
    wheel.style.transform = `rotate(${currentRotation}deg)`;
}

// Función principal del giro
function girar() {
    if (isSpinning) return;
    isSpinning = true;

    // Animar el giro de la ruleta
    animarGiroRuleta();

    // Mostrar SweetAlert con temporizador
    Swal.fire({
        title: 'Tu intercambio será...',
        timer: 2000,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    }).then(() => {
        const posibleSeleccionados = seleccionados.filter(nombre => nombre !== actualSelector);
        const seleccionado = elegirNombreAleatorio(posibleSeleccionados);

        // SweetAlert para el destinatario
        Swal.fire({ 
            title: `${seleccionado} te tocó tu chilito, ${actualSelector} 😍😘😘 `,
            icon: 'question', 
            confirmButtonText: 'Siguiente'
        });

        seleccionados = seleccionados.filter(nombre => nombre !== seleccionado);
        
console.log(actualSelector + ' a ' + seleccionado);


        // Verificar si completamos
        if (disponiblesSelectors.length === 0 && seleccionados.length === 0) {
            selectorName.textContent = "Listo";
            spinBtn.disabled = true;
        } else {
            actualizarSelector();
        }

        isSpinning = false;
    });
}

spinBtn.addEventListener("click", girar);
actualizarSelector();
