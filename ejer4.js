'use strict'
//mostrar numeros impares entre 2 núMEROS
var n1=parseInt(prompt('ingrese numero1',0));
var n2=parseInt(prompt('ingrese numero2',0));

do{
  if((n1%2)!=0){
    document.write(n1);
  }
  n1++;
}while(n1<=n2);

