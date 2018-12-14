// Start Klassenänderung
$(window).on('scroll', function () {
	if ($(window).scrollTop() > 50) {
		// Navigation
		$('nav.navbar').addClass('bg-white');
		// Back to Top Button
		$('#back-to-top-button').addClass('d-inline');
	} else {
		// Navigation Back
		$('nav.navbar').removeClass('bg-white');
		// Back to Top Button Back
		$('#back-to-top-button').removeClass('d-inline');
	}
});
// Ende Klassenänderung

// Start Smooth Scroll
$(document).ready(function () {
	$('a.smooth').on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});
});
// Ende Smooth Scroll

// Start aktuelle Jahreszahl
var aktuellesJahr = (new Date).getFullYear();
$(document).ready(function () {
	$('#jahr').text(aktuellesJahr);
});
// Ende aktuelle Jahreszahl

// Start AOS
AOS.init({
	duration: 800,
	easing: 'ease-out',
	offset: 300,
	disable: 'mobile',
});
// Ende AOS
