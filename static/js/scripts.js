$(document).ready(function() {
    
    $("#Previous").mouseenter(function() {
        $(this).removeClass("blog-section-small").addClass("blog-section");
        $("#Portfolio").removeClass("blog-section-small").addClass("blog-section");
        }).mouseleave(function() {
        $(this).removeClass("blog-section").addClass("blog-section-small");
        $("#Portfolio").removeClass("blog-section").addClass("blog-section-small").children("p").hide();
        });
        
        $("#Portfolio").mouseenter(function() {
        $(this).removeClass("blog-section-small").addClass("blog-section");
        $("#Previous").removeClass("blog-section-small").addClass("blog-section");
        }).mouseleave(function() {
        $(this).removeClass("blog-section").addClass("blog-section-small");
        $("#Previous").removeClass("blog-section").addClass("blog-section-small").children("p").hide();
        });

    
    
    
    // Previous blog reveal
    $(".prev-blog-heading").click(function() {
        $(this).next("p").slideToggle().siblings("p").hide("slow");
    }).mouseenter(function() {
        $(this).css("color", "#468ef4");
    }).mouseleave(function() {
        $(this).css("color", "#f5bf5c");
    });
    
    // Work done reveal
    $(".project-heading").click(function() {
        $(this).next("div").slideToggle().siblings("div").hide("slow");
        
        
        
        $("#Portfolio").toggleClass("blog-section-small").toggleClass("blog-section");}).mouseenter(function() {
        $(this).css("color", "#468ef4");
    }).mouseleave(function() {
        $(this).css("color", "#f5bf5c");
    });








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
    
    //Linkedin icon user feedback
    $("#linkedIn").mouseenter(function() {
        $(this).css({"opacity" : 0.5 , "transition": "ease-in-out 1s" });
    }).mouseleave(function() {
        $(this).css({"opacity" : 1 , "transition": "ease-in-out 1s" });
    });
    
    })