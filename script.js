// Assignment code here
var lowerCase = arrayForCharCodes(97, 122);
var upperCase = arrayForCharCodes(65, 90);
var numbers = arrayForCharCodes(48, 57);
var special = arrayForCharCodes(32, 47).concat(
  arrayForCharCodes(58, 64)
).concat(
  arrayForCharCodes(91, 96)
).concat(
  arrayForCharCodes(123, 126)
)

// unsure how to make use of this starter code...

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("Please select a password length between 8 and 128 characters.");
  if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
    window.alert("Sorry, your selection did not meet the password criteria. Please try again.")
  } else {
    // unsure how to make use of this starter code...
  var password = generatePassword();
  var passwordCharacters = document.querySelector("#password");
  passwordCharacters.value = password;
  }
}

function generatePassword(passwordLength, passwordChoices, characterCode){
  var passwordChoices = null;
  if (confirm("Would you like to include lower case letters?") == true) {
    passwordChoices = passwordChoices.concat(lowerCase);
  }
  else if (confirm("Would you like to include upper case letters?") == true) {
    passwordChoices = passwordChoices.concat(upperCase);
  }
  else if (confirm("Would you like to include numbers?") == true) {
    passwordChoices = passwordChoices.concat(numbers);
  }
  else if (confirm("Would you like to include special characters?") == true) {
    passwordChoices = passwordChoices.concat(special);
  }
  else {
    alert("You did not select any character types, unable to generate password.")
  }

  var passwordCharacters = []
  for (var i = 0; i < passwordLength; i++){
    var characterCode = passwordChoices[Math.floor(Math.random() * passwordChoices.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }

  return passwordCharacters.join("")
}

// creates arrays for character codes based off of ASCII codes found via google search
function arrayForCharCodes(first, last){
  var array = []
  for (var i = first; i <= last; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);