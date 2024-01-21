$(document).ready(function(){
   
    $(".laptopnavbarright p").click(function (){
       
        $(".laptopnavbarupperbottomcontent").addClass("showtopbottomnavbar")
    } )

    $('.fa-xmark').click(function(){
        $(".laptopnavbarupperbottomcontent").removeClass("showtopbottomnavbar");
    })


    $(".laptopnavbarmiddlerightside p").click(function(){
        $(".lowermostnavbar").addClass("showlowermostnavbar")
        $(".laptopmiddlenavbar").addClass("height")

   
    })

    $(".lowermostnavbar").click(function(){
        $(".lowermostnavbar").removeClass("showlowermostnavbar")
        $(".laptopmiddlenavbar").removeClass("height")
    })
})