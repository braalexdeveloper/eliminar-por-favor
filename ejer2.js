'use strict'
/*utilizando un bucle , mostrar la suma y la media de los 
números ingresados hasta ingresar un número negativo */
var n=parseInt(prompt('ingresa un número',0));
var suma=0;
var media=0;
var contador=0;
if(isNaN(n)){
n=0;
}
while(n>=0){

    contador++;
    suma=suma+n;
    console.log(suma);
    console.log(contador);
n=parseInt(prompt('ingresa un número',0));
}
media=suma/contador;
alert('la suma es '+ suma +' y la media es '+media);