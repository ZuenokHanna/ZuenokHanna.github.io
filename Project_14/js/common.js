$(document).ready(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black' ],

		offCanvas: {
			position  : 'right'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.toggle-mnu').addClass('is-active');
	}).bind('closed', function () {
		$('.toggle-mnu').removeClass('is-active');
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

          	setTimeout(function() { $('tab-pane fade in active').fadeIn(3000)}, 1500);

          })

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




 


});