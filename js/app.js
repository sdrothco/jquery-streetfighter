$(document).ready(function() {
	$('.ryu').on('mouseenter mouseleave', function() {
		$('.ryu-still').toggle();
		$('.ryu-ready').toggle();
	})
	// .on('mouseleave', function() {
	// 	$(this).find('.ryu-ready').hide();	
	// 	$(this).find('.ryu-still').show();
	// })
	.on('mousedown', function() {
		//play sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().animate({'left': '200'}, 'slow', function() {
				$(this).hide();
			});

	})
	.on('mouseup', function() {
		$('.hadouken').hide().css({'left': '-209'});
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();

	});

});