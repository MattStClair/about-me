'use strict';


  var correct = [];

  var amtCorrect = correct.Length;

  var answer1 = prompt('Do I like dogs?').toUpperCase();
  if (answer1 === 'YES' || answer1 === 'Y')
    {
       alert('you answered correctly!');

    }
  else
    {
      alert('you answered incorrect')
    }

    console.log('user answered '+answer1+ ' as to whether I like dogs');

  var answer2 = prompt('Do I beleive in the idea of aliens?').toUpperCase();
  if (answer2 === 'YES' || answer2 === 'Y')
    {
       alert('you answered correctly!');

    }
  else
    {
      alert('you answered incorrect')

    }
      console.log('user answered '+answer2+ ' as to whether I beleive in aliens');

  var answer3 = prompt('Was I in the military?').toUpperCase();
  if (answer3 === 'YES' || answer3 === 'Y')
    {
       alert('you answered correctly!');
       console.log('user answered '+ answer3 + ' as to whether I was in military');
    }
  else
    {
      alert('you answered incorrect')
      console.log('user answered '+ answer3 + ' as to whether I was in the military');
    }
  var answer4 = prompt('Can I probably hold my breath for a minute?').toUpperCase();
  if (answer4 === 'YES' || answer4 === 'Y')
    {
       alert('you answered correctly!');
       console.log('user answered '+ answer4 + ' as to whether I can hold my breath for a minute');
    }
  else
    {
      alert('you answered incorrect')
      console.log('user answered '+ answer4 + ' as to whether I can hold my breath for a minute');
    }
  var answer5 = prompt('Do I like coding? ').toUpperCase();
  if (answer5 === 'YES' || answer5 === 'Y')
    {
       alert('you answered correctly!');
       console.log('user answered '+ answer5 + ' as to whether I like coding');
    }
  else
    {
      alert('you answered incorrect')
      console.log('user answered '+ answer5 + ' as to whether I like coding');
    }

    // -------------------question 6--------------------------

    for (var i = 0; i<4; i++)
    {
    var answer6 = parseInt(prompt('Try and guess what number I am thinking of between 1-100'));
    if (answer6 === 4)
      {
         alert('you answered correctly!');
         correct.push('yes');
        console.log('user answered '+ answer6 + ' for number guesss');
      }
    else if (answer6 > 4)
      {
        alert('you answered too high, try again friend!')
        console.log('user answered '+ answer6 + ' for number guess');
      }
    else (answer6 < 4)
    {
      alert('you answered too low, try again friend!')
      console.log('user answered '+ answer6 + ' for number guess');
    }
  }

      alert('you answered: ' + amtCorrect+ 'correct out of 7!');


  // alert('Nice to meet you, ' + username + '. I have been to ' + origin + '. It is cool you like to ' + activity +' . If you do not mind, I am going with you to ' + partyLocation +
  // '. Thanks for stoppping by.');
  // console.log('The user said their name is: ' + username + '. origin is: ' + origin + '. fun activity is: ' + activity + '. party locale: ' + partyLocation + '.');
  //  //contextualized message for you to check in java console//
