//Primera funcion: Modifica el comportamiento de los botones del carrusel
$(document).ready(function(){
    //Activar slider
    $("#derecaro").carousel({interval: 4000, pause: false});
    $("#centerCaro").carousel({interval: 4000, pause: false});
    $("#izqcaro").carousel({interval: 4000, pause: false});
    //Boton izquierdo
    $(".botonizq").click(function(){
        $("#derecaro").carousel("prev");
        $("#centerCaro").carousel("prev");
        $("#izqcaro").carousel("prev");
    });
    //Boton derecho
    $(".botonader").click(function(){
        $("#derecaro").carousel("next");
        $("#centerCaro").carousel("next");
        $("#izqcaro").carousel("next");
    });
});

// Segunda funcion: Scroll progress para cada modal
$(".modal-body").scroll(function() {
    scrollito($(this));
});

function scrollito(mb){
    let escrol = mb.scrollTop();
    let escrolaltura = mb.get(0).scrollHeight;
    let alturamodal = mb.height();
    let resta = escrolaltura-(alturamodal*1.06); //Multiplicar un poquito para que sea menor al escrol y llegue a 100%
    let ancho = (escrol / resta)*100;
    document.getElementById("bar"+mb.attr("id")).style.width = ancho + "%";
}

//Tercera funcion: Spiner de carga inicial con 1 seg de delay
$(window).on('load',function() {
    setTimeout(function () {
        $(".loader").fadeOut('slow');
        $('body').removeClass('ocultar');//restaura el scroll del body
    },1000)
});