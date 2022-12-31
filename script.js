// Assignment code here
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["!","#","$","%","&","(",")","*","+","-","/","?",">","<","=","]","[",".",","]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var userInput = window.prompt("How many characters would like you in your password? \nPlease enter a numerical value.");
    if (userInput <= 7 && userInput >= 129 && userInput == NaN){
        window.alert("Your password must be at least 8 characters. \nPlease enter a numerical value over 8.");
    }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
