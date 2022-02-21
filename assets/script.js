
// arrays of characters 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "_", "^", "`", "{", "|", "}", "~", "]"];

// characters chosen by the user
var allChar = [];

// function that generates the password length
function findPasswordLength () {

  var passwordLength = 0; 

  // keep asking the user to choose a length until the answer is a number between 8 and 128 included
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = 0;
    passwordLength = parseInt(prompt("How long would you like your password to be? Please enter a number between 8 and 128 characters included."));
  
    if (passwordLength < 8) {
      window.alert("You chose a password length smaller than 8 characters. Please enter a number between 8 and 128 characters included.");

    } else if (passwordLength > 128) {
      window.alert("You chose a password length greater than 128 characters. Please enter a number between 8 and 128 characters included.");

    } else if (isNaN(passwordLength)) {
      window.alert("You entered an invalid password length. Please enter a number between 8 and 128 characters included.");

    } else {
    window.alert("You chose " + passwordLength + " characters for your password.");
    }
  }
   return passwordLength;
}

// function that generates a random password
function generatePassword() {
  var passwordLength = findPasswordLength();
  // console.log(passwordLength);

  var islowerCase = confirm("Would you like your password to contain lowercase letters?");
  var isupperCase = confirm("Would you like your password to contain uppercase letters?");
  var isNumeric = confirm("Would you like your password to contain numbers?");
  var isSymbol= confirm("Lastly, would you like your password to contain special characters?");

  // if case user don't select any character type
  if (islowerCase === false && isupperCase === false && isNumeric === false && isSymbol === false) {
    allChar = alert("No password can not be generated if you don't choose to include at least 1 type of characters. Please try again.");
    // if nothing choosen, return to the beginning of the function to start again
    return generatePassword();

    // if user chooses all character types
    } else if (islowerCase && isupperCase && isNumeric && isSymbol) {
      allChar = lowerCase.concat(upperCase, numeric, symbol);

    // if user chooses lower, upper and numeric
    } else if (islowerCase && isupperCase && isNumeric) {
      allChar = lowerCase.concat(upperCase, numeric);

    // if user chooses lower, upper and symbol
    } else if (islowerCase && isupperCase && isSymbol) {
      allChar = lowerCase.concat(upperCase, symbol);

    // if user chooses lower, numeric and symbol
    } else if (islowerCase && isNumeric && isSymbol) {
      allChar = lowerCase.concat(numeric, symbol);

    // if user chooses upper, numeric and symbol
    } else if (isupperCase && isNumeric && isSymbol) {
      allChar = upperCase.concat(numeric, symbol);

    // if user chooses lower and upper
    } else if (islowerCase && isupperCase) {
      allChar = lowerCase.concat(upperCase);

    // if user chooses lower and numeric
    } else if (islowerCase && isNumeric) {
      allChar = lowerCase.concat(numeric);

    // if user chooses lower and symbol  
    } else if (islowerCase && isSymbol) {
      allChar = lowerCase.concat(symbol);

    // if user chooses upper and numeric  
    } else if (isupperCase && isNumeric) {
      allChar = upperCase.concat(numeric);

    // if user chooses upper and symbol  
    } else if (isupperCase && isSymbol) {
      allChar = upperCase.concat(symbol);

    // if user chooses symbol and numeric  
    } else if (isSymbol && isNumeric) {
      allChar = symbol.concat(numeric);

    // if user chooses upper only 
    } else if (isupperCase) {
      allChar = upperCase;

    // if user chooses lower only  
    } else if (islowerCase) {
      allChar = lowerCase;

    // if user chooses numeric only  
    } else if (isNumeric) {
      allChar = numeric;
     
    // if user chooses symbol only  
    } else if (isSymbol) {
      allChar = symbol;
    }

  // variable that will store the random selection of characters after it's being made by the for loop
  var finalRandomChar = [];

  // randomizes allChar with user choosen length
  for (var i = 0; i < passwordLength; i++) {
      var makesRandomChar = allChar[Math.floor(Math.random() * allChar.length)];
      finalRandomChar.push(makesRandomChar);
  }

  // remove commas from the array characters to make proper result
  var final = finalRandomChar.join("");
  return final;
};
// end function generatePassword();


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