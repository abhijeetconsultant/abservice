(function ($) {
 "use strict";
$(document).ready(function(){

		/*
		Mean Menu Responsive
		============================*/
        jQuery('nav#main-menu').meanmenu();
		/*
		Testimonial Crousel
		============================*/

		  $(".all-testimonial").owlCarousel({
			autoPlay: false,
			slideSpeed:2000,
			pagination:false,
			navigation:true,
			items :1,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTablet: [767,1],
			itemsMobile : [479,1],
		  });

		/*
		Patner Crousel
		============================*/
		  $(".all-patner").owlCarousel({
			autoPlay: false,
			slideSpeed:2000,
			pagination:false,
			navigation:true,
			items : 6,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			itemsDesktop : [1199,6],
			itemsDesktopSmall : [980,5],
			itemsTablet: [768,5],
			itemsMobile : [479,3],
		  });

		/*
		Slider Crousel
		============================*/
		  $(".all-slide").owlCarousel({
			autoPlay: true,
			slideSpeed:1500,
			pagination:false,
			navigation:true,
			mouseDrag: false,
			items :1,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsMobile : [479,1],
		  });


		/*
		scrollUp
		============================*/
		$.scrollUp({
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});
		/*
		Counter Js
		============================*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
		/*
		Preeloader
		============================*/
		$(window).load(function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});

    $.validator.methods.email = function( value, element ) {
      return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }

    $('#contactForm').validate({
      submitHandler: function(form){
        $.ajax({
          url: form.action,
          type: form.method,
          data: $(form).serialize(),
          success: function(response){
            $('#contactResponse').html('Your message is sent successfully!');
            $('#contactForm')[0].reset();
          }
        });
      }
    });

    $('#brandBookingForm').validate({
      submitHandler: function(form){
        $.ajax({
          url: form.action,
          type: form.method,
          data: $(form).serialize(),
          success: function(response){
            $('#brandBookingFormResponse').html('Booking Confirmed!');
            $('#brandBookingForm')[0].reset();
          }
        });
      }
    });

    $('#bookingForm').validate({
      submitHandler: function(form){
        $.ajax({
          url: form.action,
          type: form.method,
          data: $(form).serialize(),
          success: function(response){
            $('#bookingFormResponse').html('Booking Confirmed!');
            $('#bookingForm')[0].reset();
          }
        });
      }
    });

	});
})(jQuery);
