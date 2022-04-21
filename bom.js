'use strict'
//bom : browser object model
function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);
}

function redireccionar(url){
    window.location.href=url;
}

function abrirVentana(url){
  window.open(url,"","width=400,height=300");
}
getBom();