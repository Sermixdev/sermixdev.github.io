const frame = document.getElementById("frame")
console.log(frame);
// FUNCION QUE SE EJECUTA CUANDO OCURRE EL EVENTO DE CLICK DESDE EL DOM
function alHacerClick(valor){
    if (!frame.value) {
        frame.value = "";
    }
    frame.value += valor;
    }

// FUNCION PARA CALCULAR EN EL CASO DE QUE INTRODUZCA INTRODUCIR
function calcular(operacion){
    const resultado = eval(operacion);
    frame.value = resultado;
}
// FUNCION QUE CONTROLA QUE TIPO DE CARACTER HA INTRODUCIDO EL USUARIO
document.addEventListener("keydown", valorIntroducido);
function valorIntroducido(i){
    // EVITA QUE POR DEFECTO EL INTRODUCIR Y EL RETROCESO PRODUZCAN EFECTOS NO DESEADOS
    i.preventDefault();

    // CONTROL DE LOS NUMEROS 
    if (i.key === "0"){
        frame.value += "0";
    }else if (i.key === "1"){
        frame.value += "1";
    }else if (i.key === "2"){
        frame.value += "2";
    }else if (i.key === "3"){
        frame.value += "3";
    }else if (i.key === "4"){
        frame.value += "4";
    }else if (i.key === "5"){
        frame.value += "5";
    }else if (i.key === "6"){
        frame.value += "6";
    }else if (i.key === "7"){
        frame.value += "7";
    }else if (i.key === "8"){
        frame.value += "8";
    }else if (i.key === "9"){
        frame.value += "9";
    }

    // CONTROL DE LOS OPERADORES
    if (i.key === "+"){
        frame.value += "+";
    }else if (i.key === "-"){
        frame.value += "-";
    }else if (i.key === "*"){
        frame.value += "*";
    }else if (i.key === "/"){
        frame.value += "/"
    }

    // CONTROL DEL DECIMAL
    if (i.key === "."){
        frame.value += ".";
    }

    // CONTROL DE INTRODUCIR, LLAMA A LA FUNCION CALCULAR 
    if (i.key === "Enter") {
        calcular(frame.value);
    }

    // CONTROL DE SUPRIMIR, BORRA TODO EL CONTENIDO
    if (i.key === "Delete"){
        frame.value = "";
    }

    // CONTROL DE RETROCESO, BORRA ULTIMO CARACTER INTRODUCIDO
    if (i.key === "Backspace") {
        const borrar = frame.value;
        //remove the last element in the string
        frame.value = borrar.substring(0, frame.value.length - 1);
    }
}