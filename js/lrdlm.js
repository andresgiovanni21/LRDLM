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