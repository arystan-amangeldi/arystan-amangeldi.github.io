$(document).ready(function(){
    $(body).on("scroll", function(){
        alert(" ");
        let docOffset = $(this).offset();
        if(docOffset.top > 100){
            $('#header').css("background-color","#144182");
        }
    });
});