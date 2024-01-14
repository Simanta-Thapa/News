$(document).ready(function(){
 
    $(".forminputfield").click(function(){
       $("#inputspan").addClass("active")
    })
   

    $("#signin").click(function(){
        $("inputspan").removeClass("active")
     
    })
});