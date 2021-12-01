var menu= $(".web-header-section");
$(window).scroll(function () { 
    if($(this).scrollTop() > 0 ) 
    {   
        menu.addClass("web-header-fixed");
    }
    else if($(this).scrollTop() <= 0 ) {
        menu.removeClass("web-header-fixed");
    }
});



var countDownDate = new Date("October 28, 2022 23:50:20").getTime();
var x = setInterval(function()
{
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minute = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/1000);
    
    document.getElementById("Timer").innerHTML = hours + " " + ":" + " " +  minute + " " + ":" + " " + seconds;
    
    if(distance<0)
    {
        clearInterval(x);
        
        document.getElementById("Timer").innerHTML = "Expird";
    }
},1000);





function getVals(){
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    var displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = slide1 + " - " + slide2;
}

window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
        for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
            sliders[y].oninput();
            }
        }
        }
}





$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $('.web-scroll-section').css("transform","scale(1)");
    }
    else {
        $('.web-scroll-section').css("transform","scale(0)");
    }
});
$('.web-scroll-section').click(function(){
   $('body,html').animate({
       scrollTop:0
   },400);
    return false;
});
$('[data-toggle="tooltip"]').tooltip({
    animation: false,
    delay: 1000,
});

$("#first-slider").owlCarousel({
    autoplay: true,
    items: 5,
    loop: true,
    rtl: true,
    navigation: true,
    responsive: {
        0: {
            items: 1,
        },
        375: {
            items: 2,
        },
        680: {
            items: 3,
        },
        878: {
            items: 4,
        },
        992: {
            items: 5,
        }
    }
});

$("#second-slider").owlCarousel({
    autoplay: true,
    items: 5,
    loop: true,
    rtl: true,
    navigation: true,
    responsive: {
        0: {
            items: 1,
        },
        375: {
            items: 2,
        },
        680: {
            items: 2,
        },
        878: {
            items: 4,
        },
        992: {
            items: 5,
        }
    }
});

$("#article-slider").owlCarousel({
    autoplay: true,
    items: 5,
    loop: true,
    rtl: true,
    nav: true,
    navigation: true,
    responsive: {
        0: {
            items: 1,
        },
        375: {
            items: 1,
        },
        680: {
            items: 2,
        },
        878: {
            items: 3,
        },
        992: {
            items: 3,
        }
    }
});


$(".address-item").click(function() {
    $(".address-item").removeClass("address-item-active");
    $(this).addClass("address-item-active");
    $(".address-item").children(0).children(0).removeClass("d-block");
    $(this).children(0).children(0).addClass("d-block");
});
