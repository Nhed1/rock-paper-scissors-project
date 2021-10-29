
let choices = ['rock', 'scissors', 'paper']
    Useroption = 0,
    userChoices = document.querySelectorAll('button'),
    displayWin = document.querySelector('.whoWon'),
    displayPlayer = document.querySelector('.playerDiv'),
    displayPC = document.querySelector('.pcDiv')

function addChoices(choice,valuePc){
    let element = document.createElement('i')
    element.classList.add('fas')
    element.classList.add('fa-hand-'+choices[choice-1])
    displayPlayer.appendChild(element)

    let elementPc = document.createElement('i')
    elementPc.classList.add('fas')
    elementPc.classList.add('fa-hand-'+choices[valuePc-1])
    console.log(valuePc,choice)
    displayPC.appendChild(elementPc)
}

// displayPC.append(rock)

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
    e.stopPropagation(); 
    let choiceClass = e.target.className
    // take the last value of class name, it's the number of the option
    Useroption = parseInt(choiceClass[choiceClass.length-1])
    let valuePc = pcRandom()
    addChoices(Useroption,valuePc)
    let result = checkResult(Useroption, valuePc)
    
    console.log(result)
}

userChoices.forEach(choice => {
    choice.addEventListener('click', getOption)
})












