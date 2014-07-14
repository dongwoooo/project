 $(document).ready(function(){
 	$('#bannerimg').hide().fadeIn(1500);
 	$previous = undefined;
 	$('li').click(function(){
 		if($previous == undefined) $previous = $(this);
 		$previous.removeClass('active');
 		$(this).addClass('active');
 		$previous = $(this);
 		$('body').scrollspy({target: '.navbar'});
 	});
 	$('ul.navbar-nav a').smoothScroll();
 });