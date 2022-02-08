$(document).ready(function(){

    $(".top__burger").on("click", function(){
        
        $(".container--list").toggleClass("open");
        $(".top__menu ul").toggleClass("open");
    });

});