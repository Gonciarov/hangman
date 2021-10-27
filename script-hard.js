var possibleWords = []; //Fill This array with example strings
var chosenWord, rndNum, chosenLetter; //Defining some variables for later
var lives = 10;
var wordContainer = document.querySelector('#wordContainer'); //This allows us to interact with the element with id 'wordContainer'
//Complete the two lines below to correctly target the elements given by the variable names. Hint: Look at the index.html
var hangmanImg = document.querySelector('_______');  //Targeting img.
var body = document.querySelector('_______'); //Targeting the body.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var chooseWord = function(){
//This function will randomly select a word from our 'possibleWords' array.
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var generateDashes = function(){
//This function will generate the empty '_' that will be used as placeholders for the letters.
//We want the function to generate the right amount of '_' for any given word.
//We should assign each one an id that can be referenced later.
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var checkForLetter = function(){
//This function will check if the letter that the user has selected is found in the chosenWord, and replace the '_' with the letter/s if so.
//If the letter is not found, we will remove a life and display the hangman progress.
//It will display a game over message and reveal the complete word if all lives are lost.
//Hint: Check that if the letter exists anywhere in the word first.
//Hint: the string.indexOf(x) method returns -1 if the character 'x' is not found in the string.
//Hint: the string.charAt(x) method returns the character found at index 'x' of a string.
//Hint: the element.setAttribute(--,--) method can be used to assign attributes and values of HTML elements.
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
________();
____________();
//The two functions above should first select a word and then create the placehholder '_'s.

document.querySelectorAll('________').forEach(letter => { //Replace the '_____' to target the correct elements.
letter.addEventListener('click', event => {  //These two lines are used to 'listen' for a click on each of the letter divs.
//The click function above listens to all elements with the selector identified in parenthesis. 
//We want the click function to remove the selected letter from the page so that it cannot be selected again, and then call the function to check for a letter in the chosen word.
//Hint: the .remove method allows us to remove HTML elements.
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
////Add a winning message if the word is guessed/Disable letter clicks after the user finds the word.