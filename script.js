const whoWon = function(playerWon){
    let result;
    if (playerWon == "tie"){
        result = "TIE!"
    } else if (playerWon) {
        result = "Player Won!"
    } else {
        result = "PC Won!"
    }
    return result
}
    
let choices = ["Rock", "Paper", "Scissor"],
    pcChoice = choices[pcRandom -1],
    userChoices = document.querySelectorAll('.buttons')

userChoices.forEach(choice => {
    choice.addEventListener('click', function(e){
        console.log(e)
    })
});

const pcRandom = function(){
    return Math.floor(Math.random() * 3) + 1;
};


function checkResult() {
 
    if (userChoice === pcChoice) {
        whoWon("tie");
    
    } else if (userChoice === 3 && pcChoice === 1) {
        whoWon(false)
    
    } else if (userChoice === 1 && pcChoice === 3) {
        whoWon(true)
    
    } else if (userChoice > pcChoice) {
        whoWon(true)
    
    } else {
        whoWon(false)
    }
}








