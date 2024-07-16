let operacion1 = "";
let operador = "";
let numero = "";
let ultimodigito = "";

let operdigitada = document.getElementById('operaciondigitada');
let result = document.getElementById('resultado');

function limpiar(){
    operacion1 = "";
    operador = "";
    numero = "";
    ultimodigito = "";
    operdigitada.innerHTML = "";
    result.innerHTML = "";
}

function digito(num) {
    numero = numero + num;
    operacion1 = operacion1 + num;
    operdigitada.innerHTML = operacion1;
    if (ultimodigito == "operacion" ){
        ultimodigito = "numero";
    }

}

function operacion(operador) {
    operdigitada = operador;
    ultimodigito = "operador";
    operacion1 = operacion1 + operador;
    numero = "";
    operdigitada.innerHTML = operacion1;
}

function calcular() {
    operdigitada.innerHTML = operacion1;
    operacion1 = eval(operacion1);
    result.innerHTML = operacion1;
    operacion1 = operacion1.toString();
    numero = "";
}