$(document).ready(function(){
	$('.center').hover(function(){
		$(this).addClass('highlight_center');
	},
	function(){
		$(this).removeClass('highlight_center');
	});
	$('.left').hover(function(){
		$(this).addClass('highlight_left');
	},
	function(){
		$(this).removeClass('highlight_left');
	});
	$('.right').hover(function(){
		$(this).addClass('highlight_right');
	},
	function(){
		$(this).removeClass('highlight_right');
	});
	$('.lion').pixelate({
						value: 0.15, // The percentage of pixelation to perform, a value between 0 and 1
						reveal: false // Reveal the image on hover and remain revealed if clicked
					});
});	