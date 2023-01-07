// created arrays using function (line 65) from character codes found on google
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength = 0;
// this function checks if the password length meets our criteria, if not it ends with an alert asking them to try again. if it does, generate password function runs.
function writePassword() {
  passwordLength = Math.round(window.prompt("Please select a password length between 8 and 128 characters."));
  if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
    window.alert("Sorry, your selection did not meet the password criteria. Please try again.")
    writePassword()
  } else {
  var passwordCharacters = document.querySelector("#password");
  var password = generatePassword();
  passwordCharacters.value = password;
  }
}

// this function checks all possible criteria for password, if true the desired array will concat to the empty "passwordChoices" var. If none selected alert displays.
function generatePassword(){
  var passwordChoices = [];
  var choice1 = confirm("Would you like to include lower case letters?");
  var choice2 = confirm("Would you like to include upper case letters?");
  var choice3 = confirm("Would you like to include numbers?");
  var choice4 = confirm("Would you like to include special characters?");
  
  if (choice1 == true) {
    passwordChoices = passwordChoices.concat(lowerCase);
  }
  if (choice2 == true) {
    passwordChoices = passwordChoices.concat(upperCase);
  }
  if (choice3 == true) {
    passwordChoices = passwordChoices.concat(numbers);
  }
  if (choice4 == true) {
    passwordChoices = passwordChoices.concat(special);
  }

  // the goal here is to return a randomly generated assortment of characters from the passwordChoices var, while using the selected passwordLength as the returned length.
  var passwordChars = []
  for (var i = 0; i < passwordLength; i++){
    var characterCode = passwordChoices[Math.floor(Math.random() * passwordChoices.length)]
    passwordChars.push(String.fromCharCode(characterCode))
  }
  return passwordChars.join("")
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