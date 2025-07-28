$(function(){
   $("h1").css("background-color","green") 
});

$(function(){
   $("h3").css("background-color","red") 
});

$(function(){
    $("button").click(function(){
        $("button").toggleClass("blue");
   });
});