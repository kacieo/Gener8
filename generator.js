// Assignment code here
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){;
  var passwordLength = prompt("How many characters does your password require?");
  passwordLength = parseInt(passwordLength);
  var uppercase = prompt("Do you want to include uppercase letters? Please indicate 'y' or 'yes'.");
  var number = prompt("Do you want to include numbers in your password? Please indicate 'y' or 'yes'.");
  var special = prompt("Does your password require special characters?Please indicate 'y' or 'yes'.");

  if (isNaN(passwordLength) || passwordLength <= 0){
    prompt("Please enter a valid answer.");
      return;
}

//chatacter sets
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()-_+=<>?";

//character sets + flow

var allChar = lowercaseChar;
if (uppercase === 'yes' || uppercase === 'y')
    allChar += uppercaseChar;
if (number === 'yes' || number === 'y')
  allChar += numberChar;
if (special === 'yes' || special === 'y'){
  allChar += specialChar;
}

writePassword();
});

//formula
function generatePassword(){
  var password ="";
for (var i=0; i <passwordLength; i++){
  var randomIndex = Math.floor(Math.random() * allChar.length);
  password += allChar.charAt(randomIndex);
}
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}