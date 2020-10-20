$(document).ready(function(){
   $('.card-body').hover(
     // on mouse hover this effect
     function(){
     $(this).animate({
         marginTop:"-=3%",
     },200);
    },

    // on mouse exit
    function(){

        $(this).animate({
        marginTop:"0%",
        },200);
    
    }
    );

});
