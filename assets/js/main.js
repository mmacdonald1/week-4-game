//Global variables
var randomNumber;
var winCount = 0;
var loseCount = 0;
var counter = 0;
var cakeGame;
var gameCount = 0
var randomValue;
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

    value:function(){
           randomValue1 = Math.floor(Math.random()* 20)+1;
            console.log(randomValue1);
           randomValue2 = Math.floor(Math.random()* 20)+1;
            console.log(randomValue2);
           randomValue3 = Math.floor(Math.random()* 20)+1;
            console.log(randomValue3);
           randomValue4 = Math.floor(Math.random()* 20)+1;
            console.log(randomValue4);
            
    },


        //Crystal Portion
    play: function(){

              $("#number-to-guess").text(randomNumber);


              $("#cake1").on("click", function() {
                  console.log('cake1')
                counter += randomValue1;

                $("#your-number").text(counter);

                if (counter === randomNumber) {
                  disWin.textContent= ++winCount;
                    cakeGame.reset();
                    alert("you win");
                }

                else if (counter >= randomNumber) {
                    
                  disLosses.textContent= ++loseCount;
                    cakeGame.reset();
                    alert("you lose");

                }
              });


              $("#cake2").on("click", function() {
                  console.log('cake2')

                counter += randomValue2;

                $("#your-number").text(counter);

                if (counter === randomNumber) {

                  disWin.textContent= ++winCount;
                    cakeGame.reset();
                    alert("you win");
                }

                else if (counter >= randomNumber) {

                  disLosses.textContent= ++loseCount;
                    cakeGame.reset();
                    alert("you lose");

                }
              });

                $("#cake3").on("click", function() {
                  console.log('cake3')

                counter += randomValue3;

                $("#your-number").text(counter);

                if (counter === randomNumber) {

                  disWin.textContent= ++winCount;
                    cakeGame.reset();   
                    alert("you win");
                }

                else if (counter >= randomNumber) {

                  disLosses.textContent= ++loseCount;
                    cakeGame.reset(); 
                    alert("you lose");

                }
              });

                $("#cake4").on("click", function() {
                  console.log('cake4')

                counter += randomValue4;

                $("#your-number").text(counter);

                if (counter === randomNumber) {

                  disWin.textContent= ++winCount;
                    cakeGame.reset();
                    alert("you win");
                }

                else if (counter >= randomNumber) {

                  disLosses.textContent= ++loseCount;
                    cakeGame.reset();
                    alert("you lose");

                }
              });
    },
            reset:function(){
                $("#random-number").text("");
                counter = 0;
                $("#your-number").text(counter);
                 cakeGame.random();
            },

            new: function(){
                alert("newGame")
                cakeGame.random();
                cakeGame.play();
    }


};
    cakeGame.value();
  cakeGame.new();
    
  });


 