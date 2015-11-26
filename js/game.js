$(document).ready(function () {
	var currentPiece = "O";
	var resetGame = function () {
	$(".box").html("");
	$(".box").css("background-color", " ");
	$(".box").removeClass('played');
	};

	$("#reset").on('click', resetGame)

	var placePiece = function () {
		if ($(this).hasClass('played')) {
			return;
		}

		$(this).text(currentPiece).addClass('played');
		
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
			alert("YOU'RE WINNER");
		}

		else if
			(($('.box.1a, .box.1b, .box.1c').text() === 'XXX') ||
			($('.box.2a, .box.2b, .box.2c').text() === 'XXX') ||
			($('.box.3a, .box.3b, .box.3c').text() === 'XXX') ||
			($('.box.1a, .box.2a, .box.3a').text() === 'XXX') ||
			($('.box.1b, .box.2b, .box.3b').text() === 'XXX') ||
			($('.box.1c, .box.2b, .box.3a').text() === 'XXX') ||
			($('.box.1a, .box.2b, .box.3c').text() === 'XXX')){
			resetGame();
			alert("Oi nah u suck at this game lol");
		}
		else
			console.log('lmao')
		}

	$(".box").on("click", placePiece);

});



