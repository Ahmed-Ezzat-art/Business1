/*============= 
Sticky navbar
==============*/

var nav = document.querySelector("nav");

window.onscroll = function () {
    
    if (scrollY >= 20) {
        
        nav.classList.add("nav-sticky");
    } else{
        
        nav.classList.remove("nav-sticky");
    }
    
/*===================
        Links
==================*/
    var home       = document.getElementById("home"),
        about      = document.getElementById("about"),
        service    = document.getElementById("service"),
        price      = document.getElementById("price"),
        testmonial = document.getElementById("testmonial"),
        contact    = document.getElementById("contact");

    var links = nav.getElementsByTagName("a");
    
    for (x = 0 ; x < links.length ; x++){
        links[x].classList.remove("active-link");
    }
    
    if (scrollY >= contact.offsetTop-150) {
        links[5].classList.add("active-link");
    }
    
    else if (scrollY >= testmonial.offsetTop-150) {
        links[4].classList.add("active-link");
    }
    
    else if (scrollY >= price.offsetTop-150) {
        links[3].classList.add("active-link");
    }
    
    else if (scrollY >= service.offsetTop-150) {
        links[2].classList.add("active-link");
    }
    
    else if (scrollY >= about.offsetTop-150) {
        links[1].classList.add("active-link");
    } 
    
    else{
        links[0].classList.add("active-link");
    }
}

/* show password */

    var check = document.getElementById("chk");
    var pass = document.getElementById("pass");

    check.onclick = () => {
        if (check.checked) {
            pass.setAttribute("type", "text");
        } else {
            pass.setAttribute("type", "password");
        }
    }

         /*  Up button */
    
$(function () {
    $(window).on("scroll", function () {
        
       if($(window).scrollTop() >= 1000){
           
           $(".up").fadeIn();
       } else{
           
           $(".up").fadeOut();
       }
    });
    
    $(".up, .navbar-brand").click(function () {
       $("body, html").animate({
           scrollTop: 0
       },1200); 
    });
});

      /*  Scroll to Section  */
    
    $(".home ul li a").click(function (e) {
        
        e.preventDefault();
        
        $("body, html").animate({
            
            scrollTop : $('#'+$(this).attr('data-link')).offset().top - 71
        }, 1200);
    });