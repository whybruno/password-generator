// get the references for the #generate button

const generateButton = document.querySelector('#generate');

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

// userQuestions Fun : collect and store user responses and check minimum criteria

function userQuestions() {

  var isValid = false;

  do {
    const lengthQuestion = prompt('Choose password length between 8 to 128 characters');
    const lowerQuestion = confirm('Should it contain lowercase characters?');
    const upperQuestion = confirm('Must it contain uppercase characters?');
    const numericQuestion = confirm('Should it contain numeric characters?');
    const specialQuestion = confirm('Must it contain special characters? ($@%&*, etc)');
    var userAnswers = {
      lengthQuestion: lengthQuestion,
      lowerQuestion: lowerQuestion,
      upperQuestion: upperQuestion,
      numericQuestion: numericQuestion,
      specialQuestion: specialQuestion
    } 
    if((Number(lengthQuestion) < 8)||(Number(lengthQuestion) > 128))
    alert('Choose a number between 8 and 128');
    else if((!numericQuestion)&&(!lowerQuestion)&&(!upperQuestion)&&(!specialQuestion))
    alert('You must choose at least one character type');
    else
    isValid = true;

  } while(!isValid);
  return userAnswers;
}

userQuestions()

// generatePassword Fun : generate password with data entered by the user

function generatePassword() {

  var passOptions = userQuestions();
  var passTemporary = [];
  var passDefinitive = '';

  if (passOptions.lowerQuestion) {
    for (var i of lowerCasedCharacters)
      passTemporary.push(i);
  };

  if (passOptions.upperQuestion) {
    for (var i of upperCasedCharacters)
      passTemporary.push(i);
  };

  if (passOptions.numericQuestion) {
    for (var i of numericCharacters)
      passTemporary.push(i);
  };

  if (passOptions.specialQuestion) {
    for (var i of specialCharacters)
      passTemporary.push(i);
  };

  console.log(passTemporary);

  for (var i = 0; i < passOptions.length; i++) {
    passDefinitive += passTemporary[Math.floor(Math.random() * passTemporary.length)];
  };

  console.log(passDefinitive);

  return passDefinitive;
};


// displayPassword Fun : display the password for #password input
function displayPassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// add listener event to the #generate button
generateButton.addEventListener('click', displayPassword);