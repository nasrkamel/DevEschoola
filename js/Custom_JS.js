
$(window).scroll(function () {

    var x = $(window).scrollTop();
    if (x > 300) {
        $("#btnUp").fadeIn(1000);
        $("#NavBar").addClass("coloor");
    }
    else {
        $("#btnUp").fadeOut(1000);
        $("#NavBar").removeClass("coloor");
    }
})

$('#btnUp').click(function () {
   
    $("body").animate({ scrollTop: 0 }, 1000)

})