/*
Theme Name: Baboo - Coworking Multipurpose HTML5 Template.
Author: Thaemeganj
Author URL: https://www.templatemonster.com/vendors/primehostingindia/
Version: 1.0.0
*/
$(function () {
	'use strict';
	$('.progress-circle-prog').addClass('fill-mode');
	$('.progress-circle-prog.prog-2').addClass('fill-mode');
	$('.progress-circle-prog.prog-3').addClass('fill-mode');
	//--------Masonary Js-----------//
	$('.exp-home1-grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: false,
		gutter: 30,
		resize: true,
		fitWidth: true
	});
	$('.exp-portfolio-1').masonry({
		itemSelector: '.grid-item',
		columnWidth: 1,
		percentPosition: true
	});
	$('.exp-portfolio-2').masonry({
		itemSelector: '.project-img',
		columnWidth: '.project-img'
	});
	//--Masonary item refresh on tab click--//
	var container = $('.exp-portfolio-2');
	$('a.nav-link[data-toggle=tab]').each(function () {
		var $this = $(this);
		$this.on('shown.bs.tab', function () {
			container.masonry({
				columnWidth: '.project-img',
				itemSelector: '.project-img'
			});
		});
	});
	// //-------- Navigation on scroll----// 
	function navScroll() {
		var nav = $(".start-style, .menu-style-17");
		var pos = nav.position();
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
			nav.addClass('scroll-on');
		} else {
			nav.removeClass('scroll-on');
		}
	}
	$(window).scroll(function () {
		navScroll();
	});
	// sticky side bar
	$(function () {
		if ($('body').is('.sidefix')) {
			$(document).ready(function () {
				$('.exp-profile-card').sticksy();
			});
		}

		if ($('div').is('.fix-sidebar')) {
			$(document).ready(function () {
				$('.fix-sidebar').sticksy();
			});
		}
	});
	//--------------Gallery Popup-----------//
	$('.magnific-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true
		}
	});
	//--------------video Popup---------------//
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
	//*---------------------Tab------------------*//
	$('#Monthly-tab').on('click', function () {
		$('.monthly-txt').addClass('active-color');
		$('.annualy-txt').removeClass('active-color');
	});
	$('#Annualy-tab').on('click', function () {
		$('.monthly-txt').removeClass('active-color');
		$('.annualy-txt').addClass('active-color');
	});
	//*---------------------New-Tab------------------*//
	$("document").ready(function () {
		$(".tab-body").hide();
		$(".tab-body:first").show();
	});
	$(".tabs-nav li").click(function () {
		$(".tab-body").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
		if ($(this).attr("rel") == "tab2") {
			$('.tabs-nav-tabs').addClass('slide');
		} else {
			$('.tabs-nav-tabs').removeClass('slide');
		}
		$(".tabs-nav li").removeClass("active");
		$(this).addClass("active");
	});
	//*---------------Plus Minus----------------*//
	$('.minus-btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('div').find('input');
		var value = parseInt($input.val());
		if (value > 1) {
			value = value - 1;
		} else {
			value = 0;
		}
		$input.val(value);
	});
	$('.plus-btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('div').find('input');
		var value = parseInt($input.val());
		if (value < 100) {
			value = value + 1;
		} else {
			value = 100;
		}
		$input.val(value);
	});
	//---------------CounterUp number------------//
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	})
	//----------------Homepage 1 Slider------------//
	$('.exp-home1-slider').slick({
		dots: true,
		dotsClass: 'slick-modified-dots container',
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 2000,
  		cssEase: 'linear',
  		speed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}]
	});
	//----------------Homepage 2 Sliders------------//
	$('.exp-home2-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 2000,
  		cssEase: 'linear',
  		speed: 3000,
		asNavFor: '.exp-thumbnail-slider',
		dots: true,
		dotsClass: 'slick-modified-dots',
	});
	$('.exp-thumbnail-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 2000,
  		cssEase: 'linear',
  		speed: 3000,
		asNavFor: '.exp-home2-slider',
		arrows: false,
		infinite: true,
		focusOnSelect: true
	});
	$('.exp-about-slider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: false,
		accessibility: true,
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}, {
			breakpoint: 568,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}]
	});
	$(".home2-portfolio").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		dotsClass: 'slick-modified-dots',
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}
		}]
	});
	$('.exp-pricing-tabs .nav-link').on('click', function () {
		$('.home2-portfolio.slick-slider').slick('refresh');
	})
	// ------------Homepage 3 Slider----------// 
	$(".home3-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		dotsClass: 'slick-modified-dots',
		arrows: false,
		variableWidth: true,
		infinite: true,
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false
			}
		}]
	});
	$('.exp-pricing-tabs .nav-link').on('click', function () {
		$('.home2-portfolio.slick-slider,.home3-slider.slick-slider').slick('refresh');
	})
	//----------------Testimonial Slider 1--------//
	$('.exp-testimonial-slider1').slick({
		dots: true,
		dotsClass: 'slick-modified-dots',
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}]
	});
	$('.exp-testimonial-slider2').slick({
		dots: true,
		dotsClass: 'slick-modified-dots',
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: "0px",
		speed: 500,
		responsive: [{
			breakpoint: 1600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}
		}, {
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false
			}
		}, ]
	});
	$('.home3-testimonial').slick({
		dots: true,
		dotsClass: 'slick-modified-dots',
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: "0px",
		speed: 500,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true,
				arrows: false
			}
		}, {
			breakpoint: 567,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false
			}
		}]
	});
	//customer slider 
	$('.exp-customer-slider ').slick({
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}]
	});
	//slider shop details   
	//range slider
	//Price-range
	$(function () {
		var select = $("#demo")
		var slider = $("<div class='slider'></div>").insertAfter(select).slider({
			min: 1,
			max: 100,
			value: 50,
			range: "min",
			change: function (event, ui) {
				var sliderValue = $(".slider").slider("option", "value");
				$('.sliderPosition').html(sliderValue);
			}
		});
		$('.increase ').click(function () {
			var sliderCurrentValue = $(".slider  ").slider("option", "value");
			slider.slider("value", sliderCurrentValue + 1);
		});
		$('.decrease').click(function () {
			var sliderCurrentValue = $(".slider").slider("option", "value");
			slider.slider("value", sliderCurrentValue - 1);
		});
	});
	$(function () {
		var select = $("#demo2");
		var slider = $("<div class='sliders'></div>").insertAfter(select).slider({
			min: 30,
			max: 1000,
			value: 500,
			range: "min",
			change: function (event, ui) {
				var sliderValue = $(".sliders").slider("option", "value");
				$('.sliderPositions').html(sliderValue);
			}
		});
		$('.plus').click(function () {
			var sliderCurrentValue = $(".sliders").slider("option", "value");
			slider.slider("value", sliderCurrentValue + 10);
		});
		$('.minus').click(function () {
			var sliderCurrentValue = $(".sliders").slider("option", "value");
			slider.slider("value", sliderCurrentValue - 10);
		});
	});
	//comment-slider                  
	$('.exp-about1-slider').slick({
		dots: true,
		arrows: true,
		dotsClass: 'slick-modified-dots',
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}]
	});
	 $('.listing-detail-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.listing-detail-slider-nav'
	});
	$('.listing-detail-slider-nav').slick({
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	asNavFor: '.listing-detail-slider-for',
	  	dots: false,
	  	focusOnSelect: true,
	  	responsive: [{
			breakpoint: 568,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}]
	});
	$('.location-slid').slick({
		dots: true,
		arrows: false,
		dotsClass: 'slick-modified-dots',
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		},{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		},{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}]
	});
	// back to top
	var offset = 220;
		var duration = 500;
		$(window).on('scroll', function() {
		    if ($(this).scrollTop() > offset) {
		        $('.back-top').fadeIn(duration);
		    } else {
		        $('.back-top').fadeOut(duration);
		    }
		});

		$('.back-top').on('click', function(event) {
		    event.preventDefault();
		    $('html, body').animate({scrollTop: 0}, "slow");
		    return false;
		});

		if($(window).scrollTop() > offset) {
		    $('.back-top').fadeOut(0);
		}
		$('a[href="#"]').click(function(e) {
		    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	});
	// mobile-menu
	$(document).ready(function () {
	    $('.menu-mobile-menu-container li.has-sub>a').on('click', function () {
	      $(this).removeAttr('href');
	      var element = $(this).parent('li');
	      if (element.hasClass('open')) {
	        element.removeClass('open');
	        element.find('li').removeClass('open');
	        element.find('ul').slideUp();
	      } else {
	        element.addClass('open');
	        element.children('ul').slideDown();
	        element.siblings('li').children('ul').slideUp();
	        element.siblings('li').removeClass('open');
	        element.siblings('li').find('li').removeClass('open');
	        element.siblings('li').find('ul').slideUp();
	      }
	    });
	    $('.menu-mobile-menu-container>ul>li.has-sub>a').append('<span class="holder"></span>');
	});
	// testimonial slider
  	$('.testimonial-slider-verticle').slick({
	    infinite: true,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    arrows: false,
	    dots:false,
	    vertical:true,
	    autoplay: true,
	    autoplaySpeed: 0,
	    speed: 3000,
	    cssEase: 'linear',
	    pauseOnHover: true
	});
	// testimonial slider
  	$('.twitter-slider-verticle').slick({
	    infinite: true,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    arrows: false,
	    dots:false,
	    vertical:true,
	    autoplay: true,
	    autoplaySpeed: 0,
	    speed: 3000,
	    cssEase: 'linear',
	    pauseOnHover: true
	});
	  // Desktop sub-menu
	$(document).ready(function () {
	    $('.menu-item-has-children>a').append('<span class="arrow"></span>');
	});
	// menu-style-17
	$("#open-nav-17").click(function () {
	    $("#sidenav-style-17").css("left", "0px");
	});
	$("#close-nav-17").click(function () {
	    $("#sidenav-style-17").css("left", "-320px");
	});
	$(function () {
		if ($('section').is('.exp-coming-1')) {
			// time counter
			function makeTimer() {
				var endTime = new Date("01 January 2021 00:00:00 GMT+05:30");
				endTime = (Date.parse(endTime) / 1000);
				var now = new Date();
				now = (Date.parse(now) / 1000);
				var timeLeft = endTime - now;
				var days = Math.floor(timeLeft / 86400);
				var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
				var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
				var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
				if (hours < "10") {
					hours = "0" + hours;
				}
				if (minutes < "10") {
					minutes = "0" + minutes;
				}
				if (seconds < "10") {
					seconds = "0" + seconds;
				}
				$("#clbdays").html(days);
				$("#clbhours").html(hours);
				$("#clbminutes").html(minutes);
				$("#clbseconds").html(seconds);
			}
			setInterval(function () {
				makeTimer();
			}, 1000);
		}
	});

	$(document).ready(function() {
	  	$('a, button').mouseover(function(){
		  $(".cursor, .cursor2, .cursor3").addClass('d-none');
		})
		$('a, button').mouseout(function(){
		  $(".cursor, .cursor2, .cursor3").removeClass('d-none');
		})
	});
	
	navScroll();
});