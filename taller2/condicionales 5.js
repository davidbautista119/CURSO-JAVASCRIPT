var numero = prompt ("digite un numero")
var numero2 = prompt ("digite un numero")
var operacion = prompt ("digite operacion a realizar")
if (operacion == "+" ){
var resultado = parseInt (numero) + parseInt(numero2)
    alert("el resultado es :"+ resultado)
}
else if (operacion == "-"){
     var resultado = numero - numero2
     alert("el resultado es :"+ resultado)
}

else if (operacion == "*"){
var resultado = numero * numero2
alert("el resultado es :"+ resultado)
}

else if( operacion == "/"){
var resultado = numero / numero2
alert("el resultado es :"+ resultado)


}else{
    alert ("operacion no valida")
}