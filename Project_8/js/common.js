$(document).ready(function() {

$(".mc_item_wrap ul").each(function() {
	$(this).after("<div class='mc_item_wrap_af'></div>");
});
$(".mc_toggle").click(function() {
	if($(this).parent().parent().children("ul").is(":visible")) {
		$(this).parent().parent().children("ul").slideUp();
		$(this).parent().parent().children(".mc_item_wrap_af").hide();
	} else {
	$("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
	$(".mc_item_wrap").removeClass("active");
	$(this).parent().parent().addClass("active");
    $(this).parent().parent().children("ul").slideDown();
    $(this).parent().parent().children(".mc_item_wrap_af").show();
}
});

	//Stellar - Parallax Plugin
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	//equalheight - одинаковая высота колонок
	var eqElement = ".hi_item, .sb_content > div"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});


	//Попап менеджер FancyBox
	$(".fancybox").fancybox();

	//Карусель
	function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			loop : true,
			autoHeight : true,
			dots : true,
			singleItem : true
		});
		owl.on("mousewheel", ".owl-wrapper", function (e) {
			if (e.deltaY > 0) {
				owl.trigger("owl.prev");
			} else {
				owl.trigger("owl.next");
			}
			e.preventDefault();
		});
		$(".next_button").click(function() {
			owl.trigger("owl.next");
		});
		$(".prev_button").click(function() {
			owl.trigger("owl.prev");
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 5000);
	};
	carousel_1();

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});
