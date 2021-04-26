/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
//prompts user for minimum number 
intMin = parseInt(prompt("Please enter low number of guessing range: "));
//validates that user gave valid number-positive and an int value
while (isNaN(intMin) || intMin <0){
    intMin = parseFloat(prompt("There was an error. Please enter a valid positive number: "));
}




 


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
//prompts user for maximum number 
intMax = parseInt(prompt("Please enter high number of guessing range: "));
//validates that user gave valid number-positive and an int value
while (isNaN(intMax) || intMax < (intMin+2)){
    intMax = parseInt(prompt("Number must be at least 2 higher than minimum. Please enter new high number of guessing range: "));
}








/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
intCount = 1;


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intGuess = parseInt(prompt("Please enter guess between "+intMin+ " and " +intMax+": "));
while(intGuess < intMin || intGuess > intMax || isNaN(intGuess)){
    intGuess = parseInt(prompt("Your guess was invalid. Please guess again: "));
}





/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
while (intGuess != intRandom)
{
    if (intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Your guess was too low. Please guess again: "));
        while (isNaN(intGuess) || intGuess > intMax || intGuess < intMin)
        {
            intGuess = parseInt(prompt("There was an error. Please choose a number between " + intMin + " and " + intMax + ": "));
        }
    }
    else {
        intGuess = parseInt(prompt("Your guess of was too high. Please guess again."));
        while (isNaN(intGuess) || intGuess > intMax || intGuess < intMin)
        {
            intGuess = parseInt(prompt("There was an error. Please choose a number between " + intMin + " and " + intMax));
        }
    }
    intCount++;
}
 
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");