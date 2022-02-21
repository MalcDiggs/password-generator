var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "_", "^", "`", "{", "|", "}", "~", "]"];


var allChar = [];

//generates password length
function findPasswordLength () {

  var passwordLength = 0; 

  // length
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = 0;
    passwordLength = parseInt(prompt("What length would you like the password to be? Has to be between 8 and 128 characters."));
  
    if (passwordLength < 8) {
      window.alert("Password length smaller than 8 characters.");

    } else if (passwordLength > 128) {
      window.alert("Password length greater than 128 characters.");

    } else if (isNaN(passwordLength)) {
      window.alert("INVALID");

    } else {
    window.alert("You chose " + passwordLength + " characters for the password.");
    }
  }
   return passwordLength;
}

// generates a random password
function generatePassword() {
  var passwordLength = findPasswordLength();
  // console.log(passwordLength);

  var islowerCase = confirm("Lowercase letters?");
  var isupperCase = confirm("Uppercase letters?");
  var isNumeric = confirm("Numbers?");
  var isSymbol= confirm("Special characters?");

  // wrong character type
  if (islowerCase === false && isupperCase === false && isNumeric === false && isSymbol === false) {
    allChar = alert("Password can not be generated if differnt characters not used.");
    
    return generatePassword();

    } else if (islowerCase && isupperCase && isNumeric && isSymbol) {
      allChar = lowerCase.concat(upperCase, numeric, symbol);

    } else if (islowerCase && isupperCase && isNumeric) {
      allChar = lowerCase.concat(upperCase, numeric);

    } else if (islowerCase && isupperCase && isSymbol) {
      allChar = lowerCase.concat(upperCase, symbol);

    } else if (islowerCase && isNumeric && isSymbol) {
      allChar = lowerCase.concat(numeric, symbol);

    }else if (islowerCase) {
      allChar = lowerCase;

    } else if (isNumeric) {
      allChar = numeric;
     
    } else if (isSymbol) {
      allChar = symbol;
    }

  // stores random selection of characters 
  var finalRandomChar = [];

  for (var i = 0; i < passwordLength; i++) {
      var makesRandomChar = allChar[Math.floor(Math.random() * allChar.length)];
      finalRandomChar.push(makesRandomChar);
  }

  var final = finalRandomChar.join("");
  return final;

};


//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
