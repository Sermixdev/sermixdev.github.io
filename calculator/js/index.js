const frame = document.getElementById("frame")
const selector = document.getElementById("theme");
const cambioIcono = document.getElementById("cambioIcono");

// FUNCION QUE SE EJECUTA CUANDO OCURRE EL EVENTO DE CLICK DESDE EL DOM
function alHacerClick(valor){
    if (empiezaConOperador(valor) === false){
        if (typeof valor === "string"){
            if (valor === "="){
                calcular(frame.value);
            }else if (valor === "del"){
                borrarUltimo();
            }else if (operadorRepetido(frame.value) === false ){
                frame.value += valor;
            }
        }else{
            frame.value += valor;
        }
    }
}

// FUNCION PARA CALCULAR EN EL CASO DE QUE INTRODUZCA INTRODUCIR
function calcular(operacion){
    try{
        if (operacion === null || operacion  === ""){
            frame.value = "¿Se te ha escapado el enter?";
            setTimeout(()=>{
                frame.value = "";
            }, 2000);
        }else if(operacion.substring(operacion.length-1) !== "+" &&
        operacion.substring(operacion.length-1) !== "-" &&
        operacion.substring(operacion.length-1) !== "/" &&
        operacion.substring(operacion.length-1) !== "*"){
            let resultado = eval(operacion);
            if (esDecimal(resultado) === true){
                frame.value = resultado.toFixed(3);
            }else{
                frame.value = resultado;
            } 
        }
    }catch(e){
        alert(e);
        frame.value = "";
    }
}

// CONTROLAR QUE NO INTRODUZCA EN PRIMER LUGAR OPERADORES * / 
function empiezaConOperador(valor){
    if ((frame.value == "" || frame.value == null) && (valor === "/" || valor === "*")){
        return true;
    }else{
        return false;
    }
}

// FUNCION QUE COMPRUEBA QUE EL ULTIMO VALOR INTRODUCIDO NO SEA UN OPERADOR REPETIDO
function operadorRepetido (comprobar){
    if(comprobar.substring(comprobar.length-1) === "+" ||
        comprobar.substring(comprobar.length-1) === "-" ||
        comprobar.substring(comprobar.length-1) === "/" ||
        comprobar.substring(comprobar.length-1) === "*" ||
        comprobar.substring(comprobar.length-1) === "."){
            return true;
    }else{
        return false;
    }
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
        if (operadorRepetido(frame.value) == false){
            frame.value += "+";
        }
    }else if (i.key === "-"){
            if (operadorRepetido(frame.value) == false){
                frame.value += "-";
            }
    }else if (i.key === "*"){
        if (empiezaConOperador(i.key) === false){
            if (operadorRepetido(frame.value) == false){
                frame.value += "*";
            }
        }
    }else if (i.key === "/"){
        if (empiezaConOperador(i.key) === false){
            if (operadorRepetido(frame.value) == false){
                frame.value += "/";
            }
        }
    }
    
    // CONTROL DEL DECIMAL
    if (i.key === "."){
        if (operadorRepetido(frame.value) == false){
            frame.value += ".";
        }
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
        borrarUltimo();
    }
}

// FUNCION PARA BORRAR EL ULTIMO CARACTER INTRODUCIDO
function borrarUltimo (){
    const borrar = frame.value;
    frame.value = borrar.substring(0, frame.value.length - 1);
}

// FUNCION PARA COMPROBAR SI EL VALOR QUE SE LE PASA ES UN NUMERO DECIMAL
function esDecimal(num){
    return !!(num % 1); 
}

// FUNCION PARA CAMBIAR TEMA
function cambiarTema(){
    if (selector.getAttribute("href") === "css/light.css"){
        selector.setAttribute("href", "css/dark.css");
        cambioIcono.setAttribute("name", "moon-outline");
    }else{
        selector.setAttribute("href", "css/light.css");
        cambioIcono.setAttribute("name", "sunny-outline");
    }
}