$(document).ready(function (){
    $("#nav2").click(function (){
        alert("sss");
        $('html, body').animate({
            scrollTop: $("#me").offset().top
        }, 2000);
    });

    $("#test").click(function () {
        alert("sss");

    })
});