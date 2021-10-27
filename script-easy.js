var possibleWords = ["bribery", "acceptance", "fertility"]; //Fill This array with strings
var chosenWord, rndNum, chosenLetter; //Defining some variables for later
var lives = 10;
var wordContainer = document.querySelector('#wordContainer'); //This allows us to interact with the element with id 'wordContainer'

//Complete the two lines below to correctly target the elements given by the variable names. Hint: Look at the index.html
var hangmanImg = document.querySelector('#hangmanImg');
// var body = document.querySelector('#lettersContainer');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var chooseWord = function(){
//This function will randomly select a word from our 'possibleWords' array.
//Complete the lines below to ensure that the function can select all of the entries.
//Replace the ________ with the correct code.

rndNum = Math.floor(Math.random()*possibleWords.length);
chosenWord = possibleWords[rndNum]; //This line selects a word using our random number.
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var generateDashes = function(){
//This function will generate the empty '_' that will be used as placeholders for the letters.
//We want the function to generate the right amount of '_' for any given word.
//Complete the lines below by replacing the '________'
for (var i = 0; i < chosenWord.length; i++){
var character = document.createElement('span');  //This line creates an span element. The later lines will then add attributes or HTML to that span.
character.id = "character" + i; //Assign a unique id to each character.
console.log(character.id)
character.innerHTML = "_"; //Insert the underscore.
wordContainer.appendChild(character); //Append the new element to the word container div.
}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var checkForLetter = function(){
//This function will check if the letter that the user has selected is found in the chosenWord, and replace the '_' with the letter/s if so.
//Complete the lines below by replacing the '________'

if (chosenWord.indexOf(chosenLetter) > -1) {         //Hint: If x is not found within string, the value of string.indexOf(x) is -1
    console.log(chosenLetter);
    
for (var i = 0; i < chosenWord.length; i++){  //Hint: This sets the loop through the word for our search for the letter.

if(chosenLetter === chosenWord.charAt(i)){ //Hint: This line should check if the chosen letter matches the character that is found at the current index (i). Use the string.charAt() method for your comparison
 
var letterPlace = document.querySelector('#character' + i) //Hint: This line should select the correct ID. Replace the '___'

letterPlace.innerHTML = chosenLetter; //This line puts the chosen letter into the HTML of the letterPlace element.
}
}
}
else{
lives--; //If the letter is not found in the word, remove a life.
hangmanImg.setAttribute('src', lives + ".png"); //Set the source of the hangmanImg depending on the current number of lives. .setAttribute('attribute', 'value')
}

if(lives === 0){ //Set condition for game over.
wordContainer.innerHTML = chosenWord; //Complete the word for the user.
var lose = document.createElement('div');  //Create a div to store a game over message.
lose.id = "loseText"; //Set an ID so we can style the message. Hint: Look at the CSS.
lose.innerHTML = "You have lost! The word was " + chosenWord + "."; //Complete the message.
//body.appendChild(lose); //Add the message to the end of the body.
}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
chooseWord();
generateDashes();
//The two functions above should select a word and then create the placehholder '_'s
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelectorAll('.letter').forEach(letter => { //Replace the '_____' to target the correct elements.
letter.addEventListener('click', event => {  //These two lines are used to 'listen' for a click on each of the letter divs.
if (lives > 0){   //Only run whilst the user has lives left.
    chosenLetter = letter.id;
    //chosenLetter.remove();  //The .remove method allows us to remove content from the HTML. 
    checkForLetter(); //The last thing we want to do on click is to check if the letter the user has selected is in the word.
}
})
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///Finished? Congratulations!
///Extra challenges:
////Improved & responsive styling.
////Add a 'Play again/reset' button.
////Animations.
////Allow the user to select a category before a word is chosen.
////Allow more than one word i.e. short phrases.
////Add a winning message if the word is guessed.