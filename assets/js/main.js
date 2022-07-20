(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	//jquery start from here


    	//click js start
    	
    	//click js end


    	//fixed go top button

    	//fixed go top button


    	//toggle class js start

    	//toggle class js end


    	//carousel items start

        $(".banner-slider").owlCarousel({
            items: 1,
            nav: true,
            loop:true,
            autoplay: true,
            dots: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            mouseDrag: true,
            touchDrag: false,
        });


        $(".testimonials-slider").owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,
            dots: true,
            mouseDrag: false,
            autoplayHoverPause: true,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp'
        });
        

        //carousel items end
        $('.counter').counterUp();

        // counter


       
       $('.example').showMoreItems({
        startNum:2,
        afterNum:2,
        original:true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
            startNum:2,
            afterNum:2,
            }
          },
          {
            breakpoint: 600,
            settings: {
            startNum:1,
            afterNum:1,
            }
          }
        ]
      });







        

    //jquery end 
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	