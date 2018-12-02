// Start Klassenänderung
$(window).on('scroll', function () {
	if ($(window).scrollTop() > 50) {
		// Navigation
		$('nav.navbar').addClass('bg-white');
	} else {
		// Navigation Back
		$('nav.navbar').removeClass('bg-white');
	}
});
// Ende Klassenänderung
