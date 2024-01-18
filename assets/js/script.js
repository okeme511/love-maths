// Wait for the DOm to finish loading before running the game
// Get the button elements and add event listiners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons=document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType= this.getAttribute("data-type");
                alert (`You clicked ${gameType}`);
            }
        })
    }
})

/** 
 * The main game "loop" was called when the script is first loaded
 * and after the users answer has been processed
 */

function runGame() {
    //Create two random numbers between 1 and 25, the inspect console was used
    let num1 =math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;


}



function calculateCorrectAnswer() {

}


function incrementScore() {

}


function incrementWrongAnswer() {

}

function displayAdditionQuestion() {


}


function displaySubtractQuestion() {

}


function displayMultiplyQuestion() {

}