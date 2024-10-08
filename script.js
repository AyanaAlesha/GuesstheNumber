/* Name : Ayana Aiken
    Date: September 5, 2024
    Title: Nmber guess Program
    How it works: The user inputs a number between 0 and 100.
    A random number is generated by Math.random() and compared to the user's guess.
    The program displays whether the guess was too high, too low, or correct.
*/

function numberGuess(){
    //convert input into numeric value
    let numField = parseInt(document.getElementById("num").value);
    // Math.floor evaluates to whole number of Math.random
    let randNum = Math.floor(Math.random() * 100); 

    //Check whether the input value is lower , higher, or equal to random number
    if(numField > randNum ){
        document.getElementById("responseText").textContent =
        "Too high";
    }
    else if(numField < randNum){
        document.getElementById("responseText").textContent =
        "Too low";


    }
    else if(numField === randNum){
        document.getElementById("responseText").textContent =
        "Congratulations, you guess the right number.";
    }
    console.log(randNum); //debugging purpose, log random number on console. 
}