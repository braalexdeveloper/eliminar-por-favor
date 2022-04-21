'use strict'

//muestre todos los numeros divisores 
var n1=parseInt(prompt('ingrese numero1',0));

for(var i=1;i<=n1;i++){
  if(n1%i==0){
document.write(i);
  }
}