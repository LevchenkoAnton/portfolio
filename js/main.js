$(document).ready(function(){

    $(".header__open-nav").on("click", function (event) {
        event.preventDefault();
        $(".main-nav").toggleClass("main-nav--closed");
    });

    $(".main-nav__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 65;
        $("body,html").animate({scrollTop: top}, 1200);
        $(".main-nav").addClass("main-nav--closed");
    });

    $(".logo").on("click", function (event) {
        event.preventDefault();
        $("body,html").animate({scrollTop: 0}, 1200);
    });

    $(".main__btn").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 65;
        $("body,html").animate({scrollTop: top}, 1200);
    })
});


