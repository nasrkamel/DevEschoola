
$(window).scroll(function () {

    var x = $(window).scrollTop();
    if (x > 10) {
 
        $("#NavBar").addClass("coloor");
    }
    else {
 
        $("#NavBar").removeClass("coloor");
    }
})

 