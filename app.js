'use strict';


var correct = ['starter'];

var amtCorrect = correct.length;

var answer1 = prompt('Do I like dogs?').toUpperCase();
if (answer1 === 'YES' || answer1 === 'Y')
{
  alert('you answered correctly!');
  correct.push('Dogs');
}
else
{
  alert('you answered incorrect')
}

console.log('user answered '+answer1+ ' as to whether I like dogs');


//---question 2 ------------------
var answer2 = prompt('Do I beleive in the idea of aliens?').toUpperCase();
if (answer2 === 'YES' || answer2 === 'Y')
{
  alert('you answered correctly!');
  correct.push('Aliens');

}
else
{
  alert('you answered incorrect')

}
console.log('user answered '+answer2+ ' as to whether I beleive in aliens');

// -----question 3

var answer3 = prompt('Was I in the military?').toUpperCase();
if (answer3 === 'YES' || answer3 === 'Y')
{
  alert('you answered correctly!');
  correct.push('yes military');
  console.log('user answered '+ answer3 + ' as to whether I was in military');
}
else
{
  alert('you answered incorrect')
  console.log('user answered '+ answer3 + ' as to whether I was in the military');
}

// question 4-------------------------------------------------
var answer4 = prompt('Can I probably hold my breath for a minute?').toUpperCase();
if (answer4 === 'YES' || answer4 === 'Y')
{
  alert('you answered correctly!');
  correct.push('yesBreath');
  console.log('user answered '+ answer4 + ' as to whether I can hold my breath for a minute');
}
else
{
  alert('you answered incorrect')
  console.log('user answered '+ answer4 + ' as to whether I can hold my breath for a minute');
}

// --------------------question 5 --------------------------

var answer5 = prompt('Do I like coding? ').toUpperCase();
if (answer5 === 'YES' || answer5 === 'Y')
{
  alert('you answered correctly!');
  correct.push('yescode');
  console.log('user answered '+ answer5 + ' as to whether I like coding');
}
else
{
  alert('you answered incorrect')
  console.log('user answered '+ answer5 + ' as to whether I like coding');
}

//-------------------question 6--------------------------

var counter = 4;
while (counter > 0)
{
  var userResponse = parseInt(prompt('guess the number between 1-10'));
  if(userResponse === 5)
  {
    alert('you are correct');
    break;
    correct.push('numbers');
  }
  else if (userResponse > 5 )
  {
    alert('too high, you have ' + counter + ' guesses left');
    counter -= 1;
  }
  else (userResponse < 5)
  {
    alert('too low ' + counter + ' guesses left');
    counter -= 1;
  }
}
//---seven---------------
var states = ['MONTANA', 'CALIFORNIA'];

var stateGuessCounter = 1;
while (stateGuessCounter < 6)
{
    var answer7 = prompt('Guess a state I have lived in besides WA?').toUpperCase();

        for (var possibleAnswer = 0; possibleAnswer < 2; possibleAnswer++)
              {
                if (answer7 === states[0] || answer7 === states [1])
                {
                  alert('You answered correctly! I have lived in ' + answer7);
                  correct.push('yesState');
                  console.log('user answered '+ answer7 + ' for states');
                  stateGuessCounter +=6;
                  break;
                }
                else
                {
                  alert('you answered incorrect');
                  console.log('user answered '+ answer7 + ' for states');
                  stateGuessCounter++;
                  break;
                }

              }
            }




alert('you answered: ' + correct.length + ' correct out of 7!');
