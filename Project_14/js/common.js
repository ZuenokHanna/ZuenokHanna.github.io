$(document).ready(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black', 'scrollbugfix' ],

		offCanvas: {
			position  : 'right'
		},
		pageScroll : {
 scroll : true, // прокрутка к якорю
 update : true, //прокручивать, даже если пункт обозначен как активный
 scrollOffset : 300
}

});
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});



	$('.btn-form').on('shown.bs.modal', function (e) {
		$('.modal-dialog').css('margin-top',($(window).height()-$('.modal-dialog').height())/2);
	});
	/*$(".modal").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$('form').submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
            	type: "POST",
            	url: "mail.php",
            	data: $(this).serialize()
            }).done(function() {
            	alert("Спасибо за заявку!");
            	setTimeout(function() {
            		$.magnificPopup.close();
            		$(".forms").trigger("reset");
            	}, 1000);
            });
            return false;
          });*/

          $('.slider1').slick({
          	dots: true,
          	infinite: false,
          	arrows: false, 
          });
          $('.slider2').slick({
          	dots: true,
          	infinite: false,
          	arrows: false, 
          });
          $('.slider3').slick({
          	dots: true,
          	infinite: false,
          	arrows: false, 
          });
          $('.slider4').slick({
          	dots: true,
          	infinite: false,
          	arrows: false, 
          });
          $('.slider5').slick({
          	dots: true,
          	infinite: false,
          	arrows: false, 
          });
          $('.slider6').slick({
          	dots: true,
          	infinite: false,
          	arrows: false, 
          });

          $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          	$('.slider1').slick('reinit');
          	$('.slider2').slick('reinit');
          	$('.slider3').slick('reinit');
          	$('.slider4').slick('reinit');
          	$('.slider5').slick('reinit');
          	$('.slider6').slick('reinit');

          });

          $(".slider").owlCarousel({
          	items : 1,
          	nav : true,
          	navText : "",
          	loop : true,
          	autoplay : false,
          	autoplayHoverPause : true,
          	fluidSpeed : 600,
          	autoplaySpeed : 600,
          	navSpeed : 600,
          	dotsSpeed : 600,
          	dragEndSpeed : 600
          });

          $(".owl-controls").click(function() {
          	$(".section_6 .slide_content2").animated("rotateIn");
          	return false;
          });

          $(".section_6 .slide_content2").animated("zoomIn");




          jQuery('.mm-prev-btn').hide();

          var x;
          var count;
          var counter;
          var current;
          var percent;
          var z = [];

          init();
          getCurrentSlide();
          goToNext();
          firstPage()
          getCount();
	// checkStatus();
	// buttonConfig();
	buildStatus();
	deliverStatus();
	submitData();


	function init() {
		
		jQuery('.mm-survey-container .mm-survey-page').each(function() {

			var item;
			var page;

			item = jQuery(this);
			page = item.data('page');

			item.addClass('mm-page-'+page);
			//item.html(page);

		});
	}

	function getCount() {

		count = jQuery('.mm-survey-page').length;
		return count;
	}

	function goToNext() {

		jQuery('.mm-next-btn').on('click', function() {
			goToSlide(x);
			getCount();
			current = x + 1;
			var g = current/count;
			buildProgress(g);
			var y = (count + 1);
			getButtons();
			jQuery('.mm-survey-page').removeClass('active');
			jQuery('.mm-page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			if( jQuery('.mm-page-'+count).hasClass('active') ){
				if( jQuery('.mm-page-'+count).hasClass('pass') ) {
					jQuery('.mm-finish-btn').addClass('active');
				}
				else {
					jQuery('.mm-page-'+count+' .mm-survery-content .mm-survey-item').on('click', function() {
						jQuery('.mm-finish-btn').addClass('active');
					});
				}
			}
			else {
				jQuery('.mm-finish-btn').removeClass('active');
				if( jQuery('.mm-page-'+current).hasClass('pass') ) {
					jQuery('.mm-survey-container').addClass('good');
					jQuery('.mm-survey').addClass('okay');
				}
				else {
					jQuery('.mm-survey-container').removeClass('good');
					jQuery('.mm-survey').removeClass('okay');
				}
			}
			buttonConfig();
		});
	}

	function buildProgress(g) {

		if(g > 1){
			g = g - 1;
		}
		else if (g === 0) {
			g = 1;
		}
		g = g * 100;
		jQuery('.mm-survey-progress-bar').css({ 'width' : g+'%' });
	}

	function goToSlide(x) {

		return x;
	}

	function getCurrentSlide() {

		jQuery('.mm-survey-page').each(function() {

			var item;

			item = jQuery(this);

			if( jQuery(item).hasClass('active') ) {
				x = item.data('page');
			}
			else {
				
			}

			return x;

		});

	}

	function getButtons() {

		if(current === 0) {
			current = y;
		}
		if(current === count) {
			jQuery('.mm-next-btn').hide();
		}
		else if(current === 1) {
			jQuery('.mm-prev-btn').hide();
		}
		else if(current === 7) {
			jQuery('.mm-finish-btn').hide();
		}
		else {
			jQuery('.mm-next-btn').show();
		}
	}

	jQuery('.mm-survey-q li input').each(function() {

		var item;
		item = jQuery(this);

		jQuery(item).on('click', function() {
			if( jQuery('input:checked').length > 0 ) {
		    	// console.log(item.val());
		    	jQuery('label').parent().removeClass('active');
		    	item.closest( 'li' ).addClass('active');
		    }
		    else {
				//
			}
		});

	});

	percent = (x/8) * 100;
	jQuery('.mm-survey-progress-bar').css({ 'width' : percent+'%' });

	function checkStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.closest('.mm-survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.addClass('bingo');
			item.closest('.mm-survey-page').addClass('pass');
			jQuery('.mm-survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		jQuery('.mm-survey-item').on('click', function() {
			if( jQuery('.mm-survey-container').hasClass('good') ){
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey').removeClass('okay');	
			}
			buttonConfig();
		});
	}

	function lastPage() {
		if( jQuery('.mm-next-btn').hasClass('cool') ) {
			alert('cool');
		}
	}

	function buttonConfig() {
		if( jQuery('.mm-survey').hasClass('okay') ) {
			jQuery('.mm-next-btn button').prop('disabled', false);
		}
		else {
			jQuery('.mm-next-btn button').prop('disabled', true);
		}
	}

	function submitData() {
		jQuery('.mm-finish-btn').on('click', function() {
			jQuery('.mm-survey-bottom').slideUp();
			jQuery('.mm-survey-results').slideDown();
			jQuery('.mm-survey-controller').hide();
			jQuery('.mm-survey-progress-bar').hide();
			jQuery('.mm-survey-progress').hide();
		});
	}

	function firstPage() {
		jQuery('.mm-next-btn button').on('click', function() {
			jQuery('.hide_block').hide();

		});
	}

	$("#phone7").mask("+375(**) *** *** *", {placeholder: "+375(**) *** *** *" });
	$("#phone1").mask("+375(**) *** *** *");
	$("#phone2").mask("+375(**) *** *** *");
	$("#phone3").mask("+375(**) *** *** *");
	$("#phone4").mask("+375(**) *** *** *");
	$("#phone5").mask("+375(**) *** *** *");
	$("#phone6").mask("+375(**) *** *** *");

	$("input:radio[name=radio6]").click(function() {
		var value = $(this).val();
		var image_name;
		if(value == 'Трехметровый снегозадержатель'){
			image_name = "img/quize/step6_im1.jpg";
		}else{
			if(value == 'Балон с краской'){
				image_name = "img/quize/step6_im2.jpg";
			}else{
				image_name = "img/quize/present1.jpg";
			}
		}
		$('#qu').attr('src', image_name);
	});

});