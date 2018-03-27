$(document).ready(function() {

	$("#menu").on("click","a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();
	//забираем идентификатор бока с атрибута href
	var id = $(this).attr('href'),
	//узнаем высоту от начала страницы до блока на который ссылается якорь
	top = $(id).offset().top;
	//анимируем переход на расстояние - top за 500 мс
	$('body,html').animate({scrollTop: top}, 500);
	});

	$(".arrow").on("click", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();
	//забираем идентификатор бока с атрибута href
	var id = $(this).attr('href'),
	//узнаем высоту от начала страницы до блока на который ссылается якорь
	top = $(id).offset().top;
	//анимируем переход на расстояние - top за 500 мс
	$('body,html').animate({scrollTop: top}, 500);
	});

	var $container = $('.isotope');

    // filter buttons
   $('#filters button').click(function(){
   	var $this = $(this);
       // don't proceed if already selected
       if ( !$this.hasClass('is-checked') ) {
       	$this.parents('#options').find('.is-checked').removeClass('is-checked');
       	$this.addClass('is-checked');
       }
       var selector = $this.attr('data-filter');
       $container.isotope({  itemSelector: '.item', filter: selector });
       return false;
     });

});