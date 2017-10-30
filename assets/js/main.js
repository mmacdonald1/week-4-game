//Global variables
var randomNumber;
var winCount = 0;
var loseCount = 0;
var counter = 0;
var cakeGame;

//DOM manipulations
var disWin = document.getElementById("dis-win");
var disLosses = document.getElementById("dis-losses");

$(document).ready(function() {

 cakeGame = {

    
random: function(){
    //Random Number
        randomNumber = Math.floor(Math.random()* 50)+1;
        console.log(randomNumber);
        $("#random-number").text(randomNumber);
    },
     
//value:function(){
//       randomValue = Math.floor(Math.random()* 20)+1;
//        console.log(randomValue);
//        $("#random-number").text(randomValue);
//},
    

    //Crystal Portion
play: function(){
    
          $("#number-to-guess").text(randomNumber);


          $("#cake1").on("click", function() {

            counter += 10;

            $("#your-number").text(counter);

            if (counter === randomNumber) {

              disWin.textContent= ++winCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you win");
            }

            else if (counter >= randomNumber) {

              disLosses.textContent= ++loseCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you lose");

            }
          });


          $("#cake2").on("click", function() {

            counter += 1;

            $("#your-number").text(counter);

            if (counter === randomNumber) {

              disWin.textContent= ++winCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you win");
            }

            else if (counter >= randomNumber) {

              disLosses.textContent= ++loseCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you lose");

            }
          });

            $("#cake3").on("click", function() {

            counter += 5;

            $("#your-number").text(counter);

            if (counter === randomNumber) {

              disWin.textContent= ++winCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you win");
            }

            else if (counter >= randomNumber) {

              disLosses.textContent= ++loseCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you lose");

            }
          });

            $("#cake4").on("click", function() {

            counter += 3;

            $("#your-number").text(counter);

            if (counter === randomNumber) {

              disWin.textContent= ++winCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you win");
            }

            else if (counter >= randomNumber) {

              disLosses.textContent= ++loseCount;
                cakeGame.reset();
                cakeGame.new();
                alert("you lose");

            }
          });
},
        reset:function(){
            $("#random-number").text("");
            counter = 0;
            $("#your-number").text(counter);
        },
     
        new: function(){
                    cakeGame.random();
                    cakeGame.play();
}
  

};

  cakeGame.new();
    
  });


 