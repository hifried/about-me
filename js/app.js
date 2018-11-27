'use strict';

// CONDITIONAL LOGIC
// if/else

// if(condition) {
//   run this line of code
// } else {
//   run this code instead
// }

// if(condition) {
//   run this line of code
// } else if (condition 2) {
//   run this code
// } else {
//   run this code instead
// }

var startGame = confirm('Do you want to play my guessing game?');

if(startGame) {
  alert('Great, let\'s play!');
} else {
  alert('Ok, hasta la vista, baby!');
}
var countryGuess = prompt('How many countries do you think I have visited?');
countryGuess = parseInt(countryGuess);

if(countryGuess === 22 || countryGuess === 'twenty-two' || countryGuess === 'twenty two') {
  alert('That is correct!');
} else {
  alert('Wrong!  Nice try.');
}

var languageGuess = prompt('How many languages do you think I speak?');
languageGuess = parseInt(languageGuess);

if(languageGuess === 7 || languageGuess === 'seven') {
  alert('That is correct!');
} else {'Sorry, you are incorrect!'
}

var marriedGuess = prompt('Do you think I am married? Please respond with Y or N.').toUpperCase();

if(marriedGuess === 'N') {
  alert('You are correct.  Isn\'t that sad?!');
} else if (marriedGuess === 'Y') {
  alert('I wish you were correct, but sadly I am still single.');
} else {
  alert('Please answer with Y or N!');
}

var petsGuess = prompt('Do you think I own a pet? Please respond with Y or N.').toUpperCase();

if(petsGuess === 'N') {
  alert('You\'re right! You\'re so perceptive.');
} else if (petsGuess === 'Y') {
  alert('Wrong! Although I do love pets.');
} else {
  alert('Please answer with Y or N!');
}



// yes, YES, Yes, no, NO, No, y, Y, N, n, yeah, yep, nope

