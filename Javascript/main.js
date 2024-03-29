/*NOTAS: PROBAR HABILIDADES CUANDO SE PUEDA VER COMPLETO EN COMPUTADORA
    INVESTIGAR CERRAR EL MENÚ EN MOVIL
*/

$(document).ready(function(){

    var height = window.innerHeight;
    var width = window.innerWidth;
    console.log(width)

    var menu = document.getElementById("nav-menu");
    
    if(width>=768){
        menu.setAttribute("data-offset-top", (height*.8));
    }else{
        menu.setAttribute("data-offset-top", (0));
    }

    var tamañoMenu = menu.clientHeight;

    var inicio = $(".inicio").offset().top;
        sobreMi = $(".sobre-mi").offset().top;
        habilidades = $(".habilidades").offset().top;
        portafolio = $(".portafolio").offset().top;
        paquetes = $(".paquetes").offset().top;
        contacto = $(".contacto").offset().top;

        
    $("#btn-inicio").on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        }, 0);
    });

    $("#btn-sobre-mi").on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sobreMi - tamañoMenu -30
        }, 0);
    });

    $("#btn-habilidades").on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: habilidades - tamañoMenu -50
        }, 0);
    });

    $("#btn-portafolio").on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portafolio - tamañoMenu
        }, 0);
    });

    $("#btn-paquetes").on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: paquetes - tamañoMenu
        }, 0);
    });

    $("#btn-contacto").on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - tamañoMenu
        }, 0);
    });
});
