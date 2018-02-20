$(document).ready(function(){

    $(".header__open-nav").on("click", function (event) {
        event.preventDefault();
        $(".main-nav").toggleClass("main-nav--closed");
    });

    $(".main-nav__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 65;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    $(".logo").on("click", function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1200);
    });
});


