'use strict'


function comprobarEdad(){
    let fechaIntro = document.getElementById("fechaIntro").value;
    let resultado = obtenerEdad(fechaIntro);
    let result = document.getElementById("resultado");
    result.innerHTML = `La edad es: <b>${resultado}</b>`;
    
}
function obtenerEdad(formato) {
    let hoy = new Date();
    let cumple = new Date(formato);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    let m = hoy.getMonth() - cumple.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
        edad--;
    }
    return edad;
}