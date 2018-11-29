'use strict';

var correctAnswer = 0;
console.log(correctAnswer);
var startGame = confirm('Do you want to play my guessing game?');

if(startGame) {
  alert('Great, let\'s play!');
} else {
  alert('Ok that\'s fine. Let\'s play anyway!');
}

var userName = prompt('What\'s your name?');
console.log(userName);

// Question 1

var marriedGuess = prompt('Do you think I am married? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + marriedGuess + ' about me being married.');

if(marriedGuess === 'N') {
  alert('You are correct.  Isn\'t that sad?!');
  correctAnswer++;
} else if (marriedGuess === 'Y') {
  alert('I wish you were correct, but sadly I am still single.');
} else {
  alert('Please answer with Y or N!');
}

var petsGuess = prompt('Do you think I own a pet? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + petsGuess + ' about me owning a pet.');

if(petsGuess === 'N') {
  alert('You\'re right! You\'re so perceptive.');
  correctAnswer++;
} else if (petsGuess === 'Y') {
  alert('Wrong! Although I do love pets.');
} else {
  alert('Please answer with Y or N!');
}

var courseGuess = prompt('Do you think I will pass Code 201? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + courseGuess + ' about me passing Code 201.');

if(courseGuess === 'N') {
  alert('Wrong, jerk! Aren\'t you just the optimist.');
} else if (courseGuess === 'Y') {
  alert('Correct! (I mean, I certainly hope you are correct!)');
  correctAnswer++;
} else {
  alert('Can you read? Please answer with Y or N!');
}

var seattleGuess = prompt('Do you think I am happy to be in Seattle? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + seattleGuess + ' about me being happy to be in Seattle.');

if(seattleGuess === 'N') {
  alert('You\'re wrong. Why would you think that?');
} else if (courseGuess === 'Y') {
  alert('Bravo! Damn right I\'m happy to be here!');
  correctAnswer++;
} else {
  alert('Can you read? Please answer with Y or N!');
}

var rainGuess = prompt('Do you think I\'m down with the rainy Seattle weather? Please respond with Y or N.').toUpperCase();
console.log('The user guessed: ' + rainGuess + ' about me being down with the rainy Seattle weather.');

if(rainGuess === 'N') {
  alert('You\'re wrong. I don\'t mind the rain one bit! (Yet.)');
} else if (courseGuess === 'Y') {
  alert('That\'s right! The moisture makes my skin feel so good.');
  correctAnswer++;
} else {
  alert('Can you read? Please answer with Y or N!');
}

// Question 6

var faveNumber = 88;
var guessCounter = 0;

var numberGuess = parseInt(prompt('Hey! Guess my favorite number.  Hint: It\'s between 0 and 100.'));
console.log('The user guessed: ' + numberGuess + ' is my favorite number.');

while(guessCounter < 4) {

  if(numberGuess < faveNumber && numberGuess > 0) {
    alert('Nope. Too low. Please try again.');
    numberGuess = parseInt(prompt('Guess my favorite number.  Hint: It\'s between 0 and 100.'));
    console.log('The user guessed: ' + numberGuess + ' is my favorite number.');
    guessCounter++;
  }

  else if(numberGuess > faveNumber && numberGuess < 100) {
    alert('Nope. Too high. Please try again.');
    numberGuess = parseInt(prompt('Guess my favorite number.  Hint: It\'s between 0 and 100.'));
    console.log('The user guessed: ' + numberGuess + ' is my favorite number.');
    guessCounter++;
  }

  else if(numberGuess > 100) {
    alert('Yo! I said the number is between 0 and 100. Why did you guess a number greater than 100?');
    numberGuess = parseInt(prompt('Guess my favorite number.  Hint: It\'s between 0 and 100.'));
    console.log('The user guessed: ' + numberGuess + '.');
    guessCounter++;
  }

  else if(numberGuess < 1) {
    alert('Yo! I said the number is between 0 and 100. Why did you guess a number less than 1?');
    numberGuess = parseInt(prompt('Guess my favorite number.  Hint: It\'s between 0 and 100.'));
    console.log('The user guessed: ' + numberGuess + '.');
    guessCounter++;
  }

  else if(numberGuess === faveNumber) {
    alert('Wow, that\'s right! Great guess!');
    console.log('The user guessed: ' + numberGuess + ' is my favorite number.');
    correctAnswer++;
    break;
  }

  else{
    alert('Please enter a number.');
    numberGuess = parseInt(prompt('Guess my favorite number.  Hint: It\'s between 0 and 100.'));
    console.log('The user guessed: a non-number.');
    guessCounter++;
  }

  if(guessCounter === 3) {
    alert('Nope. Sorry, you\'re out of guesses. The correct number is 88.');
    break;
  }
}

// Question 7

var statesLived = ['COLORADO', 'MINNESOTA', 'WISCONSIN', 'TEXAS'];
  
var statesGuessRemaining = 6;

while (statesGuessRemaining > 0) {
  var statesGuess = prompt('Can you guess which states I\'ve lived in? You get 6 guesses.').toUpperCase();
  console.log('The user guessed: ' + statesGuess);
  statesGuessRemaining--;

  for (var i = 0; i < statesLived.length; i++) {
    if (statesGuess === statesLived[i]) {
      alert('Yes, that\'s correct! Bravo!');
      alert('The correct answers are: Colorado, Minnesota, Wisconsin, Texas.');
      statesGuessRemaining = -1;
      correctAnswer++;
      break;
    }
  }
  if(statesGuessRemaining > 0) {
    alert('Nope. I never lived there. Please try again.');
  }
  if (statesGuessRemaining === 0) {
    alert('Nope. Sorry, you\'re out of guesses.');
    alert('The correct answers are: Colorado, Minnesota, Wisconsin, Texas.');
  }
}

console.log(correctAnswer);

alert('Well ' + userName + ', you got ' + correctAnswer + ' out of seven questions correct.');
