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
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate({'left': '300px'}, 400, function() {
				$(this).hide().css({'left': '-209px'});
			});

	})
	.on('mouseup', function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();

	});

});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}