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

const pcRandom = function(){
    return Math.floor(Math.random() * 3) + 1;
};
    
let choices = ["Rock", "Paper", "Scissor"],
    pcChoice = choices[pcRandom -1],
    userChoices = document.querySelectorAll('.option')

let option = 0;

const getOption = function(e) {
    let choiceClass = e.path[0].className.split(""),
    // take the last value of class name, it's the number of the option
    option = parseInt(choiceClass[choiceClass.length-1])
    // console.log(option)

    return option

}

userChoices.forEach(choice => {
    choice.addEventListener('click', getOption)
})





// userChoices.forEach(choice => {
//     choice.addEventListener('click', function(e){
//         let choiceClass = e.path[0].className.split(""),
//         // take the last value of class name, it's the number of the option
//         option = parseInt(choiceClass[choiceClass.length-1])

//         return option
//     })
    
// });



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








