//Primear funcion: Modifica el comportamiento de los botones del carrusel
$(document).ready(function(){
    // Activate Carousel
    $("#derecaro").carousel({interval: 4000, pause: false});
    $("#centerCaro").carousel({interval: 4000, pause: false});
    $("#izqcaro").carousel({interval: 4000, pause: false});

    $(".botonizq").click(function(){
        $("#derecaro").carousel("prev");
        $("#centerCaro").carousel("prev");
        $("#izqcaro").carousel("prev");
    });
    $(".botonader").click(function(){
        $("#derecaro").carousel("next");
        $("#centerCaro").carousel("next");
        $("#izqcaro").carousel("next");
    });
});

// Segunda funcion: Scroll progress de los modals

$(".modal-body").scroll(function() {
    scrollito($(this));
});

function scrollito(mb){
    let scroll = mb.scrollTop();
    let scroll_height = mb.get(0).scrollHeight;
    let height = mb.height();
    let resta = scroll_height-(height*1.06);
    let scrolled = (scroll / resta)*100;

    document.getElementById("bar"+mb.attr("id")).style.width = scrolled + "%";
}


//Tercera funcion: Spiner de carga inicial

