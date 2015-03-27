angular.module('calorific', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

function incDec(plusMinus) {
      var plusMinus = parseInt(plusMinus);
      var currentCalories = parseInt(document.getElementById("myCalories").innerHTML) + plusMinus;
      //alert(currentLife);
     
     if(currentCalories < 0)
     {
       currentCalories = 0;
     }
     else if(currentCalories > 5000)
     {
       currentCalories = 5000;
     }
     else
     {
       document.getElementById("myCalories").innerHTML = currentCalories;
     }
   }
    //function randomDiceroll() {
      //document.getElementById("diceRoll").innerHTML = Math.floor(Math.random() *(20-1+1)+1);
    //}
    
    function reset() {
      document.getElementById("myCalories").innerHTML = 0;
      //document.getElementById("diceRoll").innerHTML = 0;
    } 
