$(document).ready(function() {
    
    //Contact form submit button user feedback//
    
    $("#submit").click(function() {
        $(this).css({ "background-color": "#aac4e9", "border": "solid 2px #f5bf5c"}).text("Sent!");
        document.forms["contactForm"].reset();
    }).mouseenter(function() {
        $(this).css({ "background-color": "#aac4e9", "transition": "ease-in-out 1s" });
    }).mouseleave(function() {
        if ($(this).text() == "Submit") {
            $(this).css({"background-color": "#f5bf5c"} );
        } else {
            $(this).css({"background-color" : "#aac4e9"});
        }
    })
    
    })