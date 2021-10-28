let choices = ["Rock", "Paper", "Scissor"]
    Useroption = 0,
    userChoices = document.querySelectorAll('.option'),
    displayWin = document.querySelector('.whoWon'),
    displayPlayer = document.querySelector('.playerChoice'),
    displayPC = document.querySelector('.pcChoice')

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
    let num = Math.floor(Math.random() * 3) + 1
        // pcChoice = choices[num -1]

    return num
};
    
function checkResult(userChoice, pcChoice) {
    if (userChoice === pcChoice) {
        return whoWon("tie");
    
    } else if (userChoice === 3 && pcChoice === 1) {
        return whoWon(false)
    
    } else if (userChoice === 1 && pcChoice === 3) {
        return whoWon(true)
    
    } else if (userChoice > pcChoice) {
        return whoWon(true)
    
    } else {
        return whoWon(false)
    }
    
}

const getOption = function(e) {
    let choiceClass = e.path[0].className.split(""),
    // take the last value of class name, it's the number of the option
    Useroption = parseInt(choiceClass[choiceClass.length-1])
    let valuePc = pcRandom()
    let result = checkResult(Useroption, valuePc)
    displayWin.textContent = result
    displayPlayer.innerHTML = choices[Useroption-1]
    displayPC.innerHTML = choices[valuePc-1]
    console.log(Useroption)
}

userChoices.forEach(choice => {
    choice.addEventListener('click', getOption)
})












