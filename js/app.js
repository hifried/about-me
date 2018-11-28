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
console.log('The user guessed: ' + countryGuess + ' countries.');

if(countryGuess === 22 || countryGuess === 'twenty-two' || countryGuess === 'twenty two') {
  alert('That is correct!');
} else {
  alert('Wrong!  Nice try.');
}

var languageGuess = prompt('How many languages do you think I speak?');
languageGuess = parseInt(languageGuess);
console.log('The user guessed: ' + languageGuess + ' languages.');

if(languageGuess === 7 || languageGuess === 'seven') {
  alert('That is correct!');
} else {
  alert('Sorry, you are incorrect!');
}

var marriedGuess = prompt('Do you think I am married? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + marriedGuess + ' about me being married.')

if(marriedGuess === 'N') {
  alert('You are correct.  Isn\'t that sad?!');
} else if (marriedGuess === 'Y') {
  alert('I wish you were correct, but sadly I am still single.');
} else {
  alert('Please answer with Y or N!');
}

var petsGuess = prompt('Do you think I own a pet? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + petsGuess + ' about me owning a pet.')

if(petsGuess === 'N') {
  alert('You\'re right! You\'re so perceptive.');
} else if (petsGuess === 'Y') {
  alert('Wrong! Although I do love pets.');
} else {
  alert('Please answer with Y or N!');
}

var courseGuess = prompt('Do you think I will pass Code 201? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + courseGuess + ' about me passing Code 201.')

if(courseGuess === 'N') {
  alert('Well, aren\'t you just an optimist. Jerk.');
} else if (courseGuess === 'Y') {
  alert('I certainly hope you are correct!');
} else {
  alert('Can you read? Please answer with Y or N!')
}

var seattleGuess = prompt('Do you think I am happy to be in Seattle? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + seattleGuess + ' about me being happy to be in Seattle.')

if(seattleGuess === 'N') {
  alert('You\'re wrong. Why would you think that?');
} else if (courseGuess === 'Y') {
  alert('Bravo! Damn right I\'m happy to be here!');
} else {
  alert('Can you read? Please answer with Y or N!')
}

var rainGuess = prompt('Do you think I\'m down with the rainy Seattle weather? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + rainGuess + ' about me being down with the rainy Seattle weather.')

if(rainGuess === 'N') {
  alert('You\'re wrong. I don\'t mind the rain one bit! (Yet.)');
} else if (courseGuess === 'Y') {
  alert('That\'s right! The moisture makes my skin feels so good.');
} else {
  alert('Can you read? Please answer with Y or N!')
}
