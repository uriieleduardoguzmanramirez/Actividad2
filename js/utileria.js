function validarCorreo(correo) {
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

function soloLetras(texto) {
    let expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return /^\d+$/.test(numero) && numero.length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    let nacimiento = new Date(fechaNacimiento + "T00:00:00");
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    if (
        hoy.getMonth() < nacimiento.getMonth() ||
        (hoy.getMonth() === nacimiento.getMonth() &&
        hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}


function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    let mayuscula = /[A-Z]/.test(password);
    let minuscula = /[a-z]/.test(password);
    let numero = /[0-9]/.test(password);
    let especial = /[^A-Za-z0-9]/.test(password);

    return password.length >= 8 &&
           mayuscula &&
           minuscula &&
           numero &&
           especial;
}

// Valida que el cel 10 num
function validarTelefono(telefono) {
    return /^\d{10}$/.test(telefono);
}

//primera letra amyuscla
function formatearNombre(nombre) {
    let palabras = nombre.trim().toLowerCase().split(" ");

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] =
            palabras[i].charAt(0).toUpperCase() +
            palabras[i].slice(1);
    }

    return palabras.join(" ");
}