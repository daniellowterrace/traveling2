//TURKEY
$(function() {
$('.carousel').carousel({
    wrap:false,
    keyboard:false,
    pause: false,
});
});
$(document).ready(function(){
    $("#turkey_question").ready(function(){    
    $("button").click(function(){
        $("p").replaceWith("Yes!!! Go to Turkey!!! NOW!!!");
        $("#turkey_question").addClass("turkey_red turkey_red_big");
        $("#turkey_question").css({"font-family": "Kaushan Script"});
        
    });
});
});
$(document).ready(function(){
    $("#more_cats_test").dblclick(function(){
        $(this).hide(3000);
    });
});
$(document).ready(function(){
    $("#door").click(function(){
        $("#doors").hide(5000),
        $("#circles").hide(5000),
        $("#subjects").hide(5000),
        $("#circles2").hide(5000),
        $("#subjects2").hide(5000),
        $("#turkey_carousel").hide(5000),
        $("#intro_text").hide(5000),
        $("#more_cats_test").hide(5000),
        $("#door_text").hide(5000),
        $("#turkey_question").hide(5000),
        $(".turkey_footer").hide(5000),
        $("#weather").hide(5000);
    });
});
$(document).ready(function(){
    $("#door2").click(function(){
        $("#doors").hide(5000),
        $("#circles2").hide(5000),
        $("#subjects2").hide(5000),
        $("#circles").hide(5000),
        $("#subjects").hide(5000),
        $("#turkey_carousel").hide(5000),
        $("#intro_text").hide(5000),
        $("#more_cats_test").hide(5000),
        $("#door_text").hide(5000),
        $("#turkey_question").hide(5000),
        $(".turkey_footer").hide(5000),
         $("#weather").hide(5000);
});
});

$(document).ready(function(){
    $("#end").click(function(){
        $("#doors").show(5000),
        $("#circles2").show(5000),
        $("#subjects2").show(5000),
        $("#circles").show(5000),
        $("#subjects").show(5000),
        $("#turkey_carousel").show(5000),
        $("#intro_text").show(5000),
        $("#more_cats_test").show(5000),
        $("#door_text").show(5000),
        $("#turkey_question").show(5000),
        $(".turkey_footer").show(5000),
        $("#weather").show(5000);
});
});