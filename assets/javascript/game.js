  var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var wins = 0;
  var losses = 0;
  var guesses = 0;
  var lives = 6;
  var display = document.querySelector("#game");

  function displayResults(){
    var string = '<p>Wins: ' + wins; + '</p>';
    string += '<p>Losses: ' + losses; + '</p>';
    string += '<p>Guesses Left: ' + lives; + '</p>';
    string += '<p>Your Guesses: ' + guesses; + '</p>';
    display.innerHTML = string;
  }

document.onkeyup = function(event){
    var key = event.key;

    function resetGame() {
      guesses = 0;
      lives = 6;

}

    
    var computerChoice = options[Math.floor(Math.random() * options.length)];

    if (guesses < 6) {
      if (key === computerChoice) {
          alert("OMG! You're totally psychic!");
          wins++;
          guesses++;
          displayResults();
          resetGame();
      }
      else {
        lives--;
        guesses++;
        displayResults();

      }
    }
    else {
      alert("Dude. You're so not psychic.");
      losses++;
      resetGame();
    }

  }




// var bands = ["yeah yeah yeahs", "scissor sisters", "ween", "gin blossoms", "the clash", "depeche mode"];
// // var dashLetter = ["_", "_", "_", "_", "_", "_", "_" "_", "_", "_", "_", "_", "_"]
// // console.log(words[0]);
// // console.log(words[1]);
// // console.log(words[2]);
// // console.log(words[3]);
// // console.log(words[4]);
// // console.log(words[5]);

// var length = bands.length
// console.log(length);

// var word = bands[Math.floor(Math.random() * bands.length)];

// var answerArray = [];

//  for (var i = 0; i < word.length; i++) {

//     answerArray[i] = "_"; 

//   }

// var remainingLetters = word.length;



// // The game loop

//     while (remainingLetters > 0) {

//       // Show the player their progress
//       // I copied code that had prompts and alerts and I'm trying to change them to show onscreen instead of popping up.
//       	alert(answerArray.join(" "));

//       // Get a guess from the player

//       var guess = prompt("Guess a letter, or click Cancel to stop playing.");

//       if (guess === null) {

//         // Exit the game loop

//         break;

//       } else if (guess.length !== 1) {

//         alert("Please enter a single letter.");

//       } else {

//         // Update the game state with the guess

//         for (var j = 0; j < word.length; j++) {

//           if (word[j] === guess) {

//             answerArray[j] = guess;

//             remainingLetters--;

//           }

//         }

//       }

//     // The end of the game loop

//     }

//     // Show the answer and congratulate the player

//     alert(answerArray.join(" "));

//     alert("Good job! The answer was " + word);

    

// // DEBUGG My code before I found better code to help me get started. Still very lost.
// // var randInt = randomGenerator(0, array.length - 1);
// // var item = array[randInt];
// // var textbox = document.getElementById("textbox_id").value = randInt;
// // var blank = _  ...not really sure how to get those blanks in.
// // for (var i = array.length - 1; i >= 0; i--) {
// 	// arr[i]

// // }
 
// // if (letter guessed is correct) {
// 	// document.write ('letter'); 
// // }
// 	// else {
// 		// looseLife
// 	// }
// // name = array[(int) (Math.random() * array.length)];
// // System.out.println(name);

// // $(document).ready(function () { 
// 	// $().onkeydown("split" fuction() {
// 		// alert("I'm working");
// 	// })
    
//     // });
    


