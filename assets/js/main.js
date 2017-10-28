//Global variables
var randomNumber;
var winCount = 0;
var loseCount = 0;
var counter = 0;

//DOM manipulations
var disWin = document.getElementById("dis-win");
var disLosses = document.getElementById("dis-losses");



$(document).ready(function() {
//Random Number
    randomNumber = Math.floor(Math.random()* 50)+1;
    console.log(randomNumber);
    $("#random-number").text(randomNumber);

//Crystal Portion

      $("#number-to-guess").text(randomNumber);

    
      $("#cake1").on("click", function() {

        counter += 10;

        $("#your-number").text(counter);

        if (counter === randomNumber) {

          disWin.textContent= ++winCount;
        }

        else if (counter >= randomNumber) {

          disLosses.textContent= ++loseCount;

        }
      });
          
        
      $("#cake2").on("click", function() {

        counter += 1;

        $("#your-number").text(counter);

        if (counter === randomNumber) {

          disWin.textContent= ++winCount;
        }

        else if (counter >= randomNumber) {

          disLosses.textContent= ++loseCount;

        }
      });
          
        $("#cake3").on("click", function() {

        counter += 5;

        $("#your-number").text(counter);

        if (counter === randomNumber) {

          disWin.textContent= ++winCount;
        }

        else if (counter >= randomNumber) {

          disLosses.textContent= ++loseCount;

        }
      });
        
        $("#cake4").on("click", function() {

        counter += 3;

        $("#your-number").text(counter);

        if (counter === randomNumber) {

          disWin.textContent= ++winCount;
        }

        else if (counter >= randomNumber) {

          disLosses.textContent= ++loseCount;

        }
      });



  });

 