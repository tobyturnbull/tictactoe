$(document).ready(function () {
	var currentPiece = "O"
	var placePiece = function () {

		if ($(this).hasClass('played')) {
			return;
		}

		$(this).text(currentPiece).addClass('played');
		
		if (currentPiece === "O") {
			currentPiece = "X"
		} else 	{
			currentPiece = "O"
		}
	}

	$(".box").on("click", placePiece);
});
	