var charaterLength = 10;
var choiceArr = [];

var symbolArr = ['#', '@', '$', '%', '^', '&', '*', '(', ')', '+', '_', '-', '=', '[', ']', '/', '?', '>', '<', '{', '}'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < charaterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}


function getPrompts() {
  choiceArr = [];

  charaterLength = parseInt(prompt("lenght of password? (10 - 100 charaters"));

  if (isNaN(charaterLength) || charaterLength < 10 || charaterLength > 100) {
    alert("lenght has to be a minimun of 10 and maximum of 100 charaters. Please try again.");
    return false;
  }
  if (confirm("Would you like symbols in your password?")) {
    choiceArr = choiceArr.concat(symbolArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like lowercase in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}