$(document).ready(function() {
    
// Page content hide/show function and link change on hover

    $(".title-link").click(function() {
       window.link = this.id + "-section";
        $("#"+link).removeClass("deactivated").siblings("section").addClass("deactivated")})
        .mouseenter(function() {
       $(this).css("color", "#f5bf5c");})
       .mouseleave(function() {
       $(this).css("color", "#fafafa");
        });
        
// Page content hide/show function and link change on hover


// Previous blog segment reveal

   $(".prev-blog-heading").click(function() {
       $(this).next("p").slideToggle().siblings("p").hide("slow");
   }).mouseenter(function() {
       $(this).css("color", "#468ef4");
   }).mouseleave(function() {
       $(this).css("color", "#f5bf5c");
   });
// Previous blog segemt reveal


// Work done reveal
    $(".project-heading").click(function() {
        $(this).next("div").slideToggle().siblings("div").hide("slow");
    }).mouseenter(function() {
        $(this).css("color", "#468ef4");
    }).mouseleave(function() {
        $(this).css("color", "#f5bf5c");
    });
// Work done reveal

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
//Contact form submit button user feedback//

//Linkedin icon user feedback
    $("#linkedIn").mouseenter(function() {
        $(this).css({"opacity" : 1 , "transition": "ease-in-out 1s" });
    }).mouseleave(function() {
        $(this).css({"opacity" : 0.9 , "transition": "ease-in-out 1s" });
    });
//Linkedin icon user feedback        
});

 $("#return").click(topFunction());