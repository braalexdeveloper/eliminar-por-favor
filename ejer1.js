'use strict'

/*programa que pido 2 números y nos diga cual es el menor mayor y si son iguales */

var n1=parseInt(prompt('ingrese el primer número',0));
var n2=parseInt(prompt('ingrese el segundo número',0));

while(n1<=0 || n2<=0 || isNaN(n1) || isNaN(n2)){
    
    var n1=parseInt(prompt('ingrese el primer número',0));
    var n2=parseInt(prompt('ingrese el segundo número',0));
}
    if(n1>n2){
        document.write('el número mayor es : '+n1);
        document.write('el número menor es : '+n2);
      }else if(n2>n1){
          document.write('el número mayor es : '+n2);
          document.write('el número menor es : '+n1);
      }else if(n2==n1){
          document.write('los números son iguales');
      }