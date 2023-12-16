var generateButton = document.querySelector("#generate");

// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// specialCharacters
// numericCharacters
// lowerCasedCharacters
// upperCasedCharacters

// lengthQuestion
// lowerQuestion
// upperQuestion
// numericQuestion
// specialQuestion

function userQuestions() {

  var isValid = false;

  do {
    const lengthQuestion = prompt("Choose password length between 8 and 128 characters");
    const lowerQuestion = confirm("Do you want your password to include lower case letters?");
    const upperQuestion = confirm("Do you want your password to include upper case letters?");
    const numericQuestion = confirm("Do you want your password to include numbers?");
    const specialQuestion = confirm("Do you want your password to include special characters?");
    var userAnswers = {
      lengthQuestion: lengthQuestion,
      lowerQuestion: lowerQuestion,
      upperQuestion: upperQuestion,
      numericQuestion: numericQuestion,
      specialQuestion: specialQuestion
    } 
    if((Number(lengthQuestion) < 8)||(Number(lengthQuestion) > 128))
    alert("Choose number between 8 and 128");
    else if((!numericQuestion)&&(!lowerQuestion)&&(!upperQuestion)&&(!specialQuestion))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return userAnswers;
}

userQuestions()

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);