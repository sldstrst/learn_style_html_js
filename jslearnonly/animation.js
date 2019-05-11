// function toggleDiv(divID) {
//     $("#" + divID).fadeToggle(800, function() {
//         if ($(this).is(':visible')){
//             var resultDiv =  divID;
//         }
        
//     });

//     if ($("#" + divID).is(':visible')){

//     }


// }



$(document).ready(function(divID){
    $("button").click(2000, function(){
        if($(this).is(':visible')){
            $("#" + divID).slideDown("slow");
        }
        else
        $("#" + divID).sl("slow");
    });
});


$(".btn-slide").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });