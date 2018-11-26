  function init(){
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
    var signo = document.getElementById('sign')
    var tecla = document.getElementsByClassName('tecla');
    var coma = 0;
    var operandoA;
    var operandoB;
    var operacion;
    var resparcial = 0;
    var res = 0;
//eventos
  for (var i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    })
  }
  for (var i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    })
  }

  uno.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "1";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "1";
    }
  }
  dos.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "2";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "2";
    }
  }
  tres.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "3";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "3";
    }
  }
  cuatro.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "4";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "4";
    }
  }
  cinco.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "5";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "5";
    }
  }
  seis.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "6";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "6";
    }
  }
  siete.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "7";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "7";
    }
  }
  ocho.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "8";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "8";
    }
  }
  nueve.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "9";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "9";
    }
  }
  cero.onclick = function(e){
    if ((resultado.textContent == "0") && (coma == 0)) {
      resultado.textContent = "0";
    } else if(resultado.textContent.length < 8) {
      resultado.textContent = resultado.textContent + "0";
    }
  }
  punto.onclick = function(e){
    if ((coma == 0) && (resultado.textContent.length < 8)) {
      resultado.textContent = resultado.textContent + ".";
      coma = 1;
    }else {
      resultado.textContent = resultado.textContent;
    }
  }
  signo.onclick = function(e){
    resultado.textContent = resultado.textContent * (-1);
  }
  reset.onclick = function (e) {
    resultado.textContent = "0";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
    resparcial = 0;
    coma = 0;
  }
  suma.onclick = function(e){
    switch (operacion) {
      case "":
        operacion = "+"
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 0;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        break;
      case "+":
      if (resparcial == 0) {
        operandoA = resultado.textContent;
        operandoB = 0;
        resultado.textContent = "";
        parcial();
      }else {
        operandoB = resultado.textContent;
        resultado.textContent = "";
        parcial();
      }
        break;
      case "-":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 0;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "+"
        break;
      case "*":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "+"
        break;
      case "/":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "+"
        break;
    }
  }
  resta.onclick = function(e){
    switch (operacion) {
      case "":
        operacion = "-"
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 0;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        break;
      case "-":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 0;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        break;
      case "+":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 0;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "-"
        break;
      case "*":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "-"
        break;
      case "/":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "-"
        break;
    }
  }
  multiplicacion.onclick = function(e){
    switch (operacion) {
      case "":
        operacion = "*"
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        break;
      case "*":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent,
          resultado.textContent = "";
          parcial();
        }
        break;
      case "+":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "*";
        break;
      case "-":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "*";
        break;
      case "/":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "*";
        break;
    }
  }
  division.onclick = function(e){
    switch (operacion) {
      case "":
        operacion = "/"
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        break;
      case "/":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
      case "*":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          operandoB = 1;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "/"
        break;
      case "+":
        if (operacion == 0) {
          operandoA = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "/"
        break;
      case "-":
        if (resparcial == 0) {
          operandoA = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }else {
          operandoB = resultado.textContent;
          resultado.textContent = "";
          parcial();
        }
        operacion = "/"
        break;
    }
  }
  igual.onclick = function(e){
    operandoB = resultado.textContent;
    resolver();
  }
  //funciones
  function resolver(){
    switch (operacion){
      case "+":
        res =  parseFloat(resparcial) + parseFloat(operandoB);
        break;
      case "-":
        res =  parseFloat(resparcial) - parseFloat(operandoB);
        break;
      case "*":
        res =  parseFloat(resparcial) * parseFloat(operandoB);
        break;
      case "/":
        res =  parseFloat(resparcial) / parseFloat(operandoB);
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
        resparcial = parseFloat(operandoA) + parseFloat(operandoB);
        break;
      case "-":
        resparcial = parseFloat(operandoA) - parseFloat(operandoB);
        break;
      case "*":
        resparcial = parseFloat(operandoA) * parseFloat(operandoB);
        break;
      case "/":
        resparcial = parseFloat(operandoA) / parseFloat(operandoB);
        break;
    }
  }
  function tamaño(){

  }
}
