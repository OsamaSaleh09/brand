/*global $,document, window*/
$(document).ready(function(){
    "use strict";
    $(".carousel").carousel({
        interval: 5000
    })
    //show color option
    $(".palette-check").click(function(){
        "use strict";
        $(".color-option").toggleClass('rotate');
        $(".option-box").toggleClass('left-option')
    })
    var  colorLi = $(".color-option ul li");
    colorLi
    .eq(0).css("backgroundColor","#222").end()
    .eq(1).css("backgroundColor","#0a3761").end()
    .eq(2).css("backgroundColor","#015255").end()
    .eq(3).css("backgroundColor","#833471");

    colorLi.click(function(){
        $("link[href*='color']").attr("href",$(this).attr("data-value"));
    });

    var totop = $(".to-top");
    $(window).scroll(function(){
        if($(this).scrollTop() >= 400){
            totop.fadeIn(500);
        } else {
            totop.fadeOut(500);
        }
    });
    totop.click(function(){
        $("html,body").animate({scrollTop : 0},600)
    });
})

$(window).on("load",function(){
    "use strict";
    $(".loading .loading-child").fadeOut(1000,function(){
        $("body").css("overflowY","auto");
        $(this).parent().fadeOut(2000,function(){
            $(this).remove();
        });
    });
});
$(".navbar-toggle").click(function(){
    $(this).addClass("background")
})