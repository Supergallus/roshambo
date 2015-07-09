'use strict';

exports.play = function(hand) {
	var computer_hand = random_hand();
	
	console.log('you play ' + hand.toUpperCase());
	console.log('computer play ' + computer_hand);
	
	switch (hand) {
		case 'rock':
			if (computer_hand == 'ROCK') { console.log('ex aequo'); }
			if (computer_hand == 'PAPER') { console.log('you loose'); }
			if (computer_hand == 'SCISSORS') { console.log('you win'); }
			break;
		case 'paper':
			if (computer_hand == 'ROCK') { console.log('you win'); }
			if (computer_hand == 'PAPER') { console.log('ex aequo'); }
			if (computer_hand == 'SCISSORS') { console.log('you loose'); }
			break;
		case 'scissors':
			if (computer_hand == 'ROCK') { console.log('you loose'); }
			if (computer_hand == 'PAPER') { console.log('you win'); }
			if (computer_hand == 'SCISSORS') { console.log('ex aequo'); }
			break;
		default:
			console.log(hand + " doesn't exist in this world");
			break;
	}
}

function random_hand() {
	switch (Math.floor(Math.random() * 3 + 1)) {
		case 1:
			return 'ROCK';
			break;
		case 2:
			return 'PAPER';
			break;
		case 3:
			return 'SCISSORS';
			break;
	}
}