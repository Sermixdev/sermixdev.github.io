const frame = document.getElementById("frame")
console.log(frame);
// FUNCION SE EJECUTA CUANDO OCURRE EL EVENTO DE CLICK DESDE EL DOM
function alHacerClick(valor){
    if (valor === '8'){
        frame.value += valor;
    }
}
