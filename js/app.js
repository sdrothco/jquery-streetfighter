var keyPressed = false;
var mousePressed = false;
$(document).ready(function() {
	var overRyu = false;
	$('.title').delay(900).fadeOut();
	$('.ryu').on('mouseenter', function() {
		if(!keyPressed && !mousePressed) {
			overRyu = true;
			hideRyu();
			$('.ryu-ready').show();
		}
	})
	.on('mouseleave', function() {
		if(!keyPressed) {
			overRyu = false;
			hideRyu();
			$('.ryu-still').show();
		}
	})
	.on('mousedown', function() {
		if(!keyPressed) {
			playHadouken();
			hideRyu();
			mousePressed = true;
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
				.animate({'left': '300px'}, 400, function() {
					$(this).hide().css({'left': '-209px'});
				});
		}
	})
	.on('mouseup', function() {
		if(!keyPressed) {
			mousePressed = false;
			hideRyu();
			$('.ryu-ready').show();
		}
	});
	$(document).on ('keypress keydown', function (e) {
        if (e.which==88 && !keyPressed && !mousePressed) {
			hideRyu();
			keyPressed = true;
			$('.ryu-cool').show();
		}
    })
    .on('keyup', function (e) {
		if (e.which==88 && !mousePressed) {
			keyPressed = false;
			hideRyu();
			if (overRyu) { $('.ryu-ready').show(); }
			else {  $('.ryu-still').show(); }
		}
    })
    .on('mouseup', function() {
		if(!keyPressed) {
			mousePressed = false;
		}
	});
});
function hideRyu () {
	if( !keyPressed ) {
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	}
}
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}