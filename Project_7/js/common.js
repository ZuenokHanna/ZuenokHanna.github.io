$(document).ready(function() {

	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".two_mnu").slideToggle();
		return false;
	});

});