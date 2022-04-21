'use strict'

function mostrarArray(elementos,textoCustom=""){
    document.write(textoCustom);
    elementos.forEach((elemento,index)=>{
        document.write(elemento+"<br>");
    });
}
//var numeros=new Array(6);
var numeros=[];

for(var i=0;i<=5;i++){
 //numeros[i]=parseInt(prompt('ingrese numero',0));
 numeros.push(parseInt(prompt('ingrese numero',0)));
}

mostrarArray(numeros);
//mostrar array por consola
console.log(numeros);

//ordenar y mostrar
numeros.sort(function(a,b){return a-b});
console.log(numeros);
document.write("<br>");
mostrarArray(numeros,'ordenados<br>');

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros,'revertido<br>');
//busqueda
var busqueda=parseInt(prompt('Busca un numero',0));
var posicion=numeros.findIndex(numero=>numero==busqueda);

if(posicion && posicion!= -1){
    document.write("<h1>Encontrado</h1>");
    document.write("posición de la busqueda: "+posicion);
}else{
    document.write("<h1>NO Encontrado</h1>"); 
}
