$(document).ready(function () {
	var currentPiece = "O";
	var resetGame = function () {
		$(".box").html("");
		$(".box").css("background-color", " ");
		$(".box").removeClass('played');
	};

	$("#reset").on('click', resetGame);

	var placePiece = function () {
		if ($(this).hasClass('played')) {
			return;
		}

		var $animated = $('<span/>').text(currentPiece).hide();

		$(this).append($animated).addClass('played');
		
		$animated.fadeIn();

		if (currentPiece === "O") {
			currentPiece = "X";
		} else	{
			currentPiece = "O";
		}

		checkWinner();
	};
		
		var checkWinner = function () {
			if (($('.box.1a, .box.1b, .box.1c').text() === 'OOO') ||
				($('.box.2a, .box.2b, .box.2c').text() === 'OOO') ||
				($('.box.3a, .box.3b, .box.3c').text() === 'OOO') ||
				($('.box.1a, .box.2a, .box.3a').text() === 'OOO') ||
				($('.box.1b, .box.2b, .box.3b').text() === 'OOO') ||
				($('.box.1c, .box.2b, .box.3a').text() === 'OOO') ||
				($('.box.1a, .box.2b, .box.3c').text() === 'OOO')){
				resetGame();
				alert("Player 1 Wins");
			} else if
				(($('.box.1a, .box.1b, .box.1c').text() === 'XXX') ||
				($('.box.2a, .box.2b, .box.2c').text() === 'XXX') ||
				($('.box.3a, .box.3b, .box.3c').text() === 'XXX') ||
				($('.box.1a, .box.2a, .box.3a').text() === 'XXX') ||
				($('.box.1b, .box.2b, .box.3b').text() === 'XXX') ||
				($('.box.1c, .box.2b, .box.3a').text() === 'XXX') ||
				($('.box.1a, .box.2b, .box.3c').text() === 'XXX')) {
				resetGame();
				alert("Player 2 Wins");
			} else if ($('.box.played').length === 9){
				resetGame();
				alert("Cat's Game");
			}
		}

	var bubble = function (event) {
		console.log(event.clientX, event.clientY);
	
		var $b = $('<div/>').addClass('bubble');
		
		var size = Math.random() * 4;

		$b.css({
			width: size + 'em',
			height: size + 'em',
			left: event.clientX,
			top: event.clientY
		});
		$('body').append($b);

		//Clean up after ourselves.
		setTimeout(function() {;
			$b.animate({
				top: -1000
			}, 2000, function (){
				$b.remove();
			});
	
		}, 1400);
	};

	$(".box").on("click", placePiece);
	$(".box").on("touch", placePiece);
	$(".currentPiece").addClass('animated bounceInLeft');
	$('.box').addClass('animated rollIn');
	$("body").on('touchmove', bubble);

});



