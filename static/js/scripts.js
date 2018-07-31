$(document).ready(function() {
    
    //Contact form submit button user feedback//
    
    $("#submit").click(function() {
        $(this).css({"background-color": "#f5bf5c", "border":"solid 1px #f5bf5c" }).text("Sent!");
    }).mouseenter(function() {
        $(this).css({"background-color": "#f5bf5c", "transition": "ease-in-out 1s"});
    }).mouseleave(function() {
        if($(this).text()=="Submit"){
            $(this).css("background-color", "#aac4e9");
        }else{
            $(this).css("background-color", "#f5bf5c");
        }
        });
        
   
})