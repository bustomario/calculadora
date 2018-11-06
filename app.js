  function init() {
//variables
    var resultado = document.getElementById('display');
    var reset = document.getElementById('on');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicacion = document.getElementById('por');
    var division = document.getElementById('dividido');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var punto = document.getElementById('punto');
    var coma = 0;
    var operandoA;
    var operandoB;
    var operacion;
    var digitos;
    var resparcial = 0;
    var res = 0;
//eventos

  uno.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "1";
      digitos = digitos + 1;
    } else {
      resultado.textContent = resultado.textContent + "1";
      digitos = digitos + 1;
    }
  }
  dos.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "2";
    } else {
      resultado.textContent = resultado.textContent + "2";
    }
  }
  tres.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "3";
    } else {
      resultado.textContent = resultado.textContent + "3";
    }
  }
  cuatro.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "4";
    } else {
      resultado.textContent = resultado.textContent + "4";
    }
  }
  cinco.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "5";
    } else {
      resultado.textContent = resultado.textContent + "5";
    }
  }
  seis.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "6";
    } else {
      resultado.textContent = resultado.textContent + "6";
    }
  }
  siete.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "7";
    } else {
      resultado.textContent = resultado.textContent + "7";
    }
  }
  ocho.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "8";
    } else {
      resultado.textContent = resultado.textContent + "8";
    }
  }
  nueve.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "9";
    } else {
      resultado.textContent = resultado.textContent + "9";
    }
  }
  cero.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "0";
    } else {
      resultado.textContent = resultado.textContent + "0";
    }
  }
  punto.onclick = function(e){
    if (coma == 0) {
      resultado.textContent = resultado.textContent + ".";
      coma = 1;
    }else {
      resultado.textContent = resultado.textContent;
    }
  }
  reset.onclick = function (e) {
    resultado.textContent = "0";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
    coma = 0;
  }
  suma.onclick = function(e){
    operacion = "+"
    if (resparcial == 0) {
      operandoA = resultado.textContent;
      resultado.textContent = "0";
      parcial();
    }else {
      operandoB = resultado.textContent;
      resultado.textContent = "0";
      parcial();
    }
  }
  resta.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "-";
    resultado.textContent = "0";
  }
  multiplicacion.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "*";
    resultado.textContent = "0";
  }
  division.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "/";
    resultado.textContent = "0";
  }
  igual.onclick = function(e){
    operandoB = resultado.textContent;
    resolver();
  }
  function resolver(){
    switch (operacion){
      case "+":
        res =  parseFloat(resparcial) + parseFloat(operandoB)
        break;
      case "-":
        res =  parseFloat(operandoA) - parseFloat(operandoB)
        break;
      case "*":
        res =  parseFloat(operandoA) * parseFloat(operandoB)
        break;
      case "/":
        res =  parseFloat(operandoA) / parseFloat(operandoB)
        break;
    }
    resultado.textContent = res;
    operandoA = 0;
    operandoB = 0;
    operacion = "";
    resparcial = 0;
  }
  function parcial(){
    switch (operacion) {
      case "+":
        resparcial = parseFloat(operandoA) + parseFloat(operandoB)
        break;
      case "-":
        resparcial = parseFloat(operandoA) - parseFloat(operandoB)
        break;
      case "*":
        resparcial = parseFloat(operandoA) * parseFloat(operandoB)
        break;
      case "/":
        resparcial = parseFloat(operandoA) / parseFloat(operandoB)
        break;
    }
    operacion = "";
  }


}
