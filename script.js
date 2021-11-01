let pcDiv = document.querySelector('.pcDiv')
let playerDiv = document.querySelector('.playerDiv')
let buttons = document.querySelectorAll('button')
let result = document.querySelector('.whoWins') 
let players = []
const pcRandom = function(){
    let num = Math.floor(Math.random() * 3) + 1
        // pcChoice = choices[num -1]
    buttons.forEach(button => {
        if (button.className == num) {
            // take the class of the icon to the random num
            pcChoice = button.firstChild.className
        }
    })
    return pcChoice
};

buttons.forEach(button => {
    button.addEventListener('click', function(){
        let playerChoice = button.firstChild.className
        // take the class of the icon when click a button
        let pcChoice = pcRandom()
        pcChoiceSplit = pcChoice.split(' ')
        playerChoiceSplit = playerChoice.split(' ')
        appendElement(pcChoiceSplit, playerChoiceSplit)

    })
})

function appendElement(pc, player ){
    let iplayer = document.createElement('i')
    let ipc = document.createElement('i')
    for (let x = 0; x < pc.length; x ++){
        ipc.classList.add(pc[x])
        iplayer.classList.add(player[x])
    }

        // 
    if (players == 0){
        players.push(ipc, iplayer)
        pcDiv.appendChild(ipc)
        playerDiv.appendChild(iplayer)
    } else {
        players = []
        pcDiv.innerHTML = ''
        playerDiv.innerHTML = ''
        pcDiv.appendChild(ipc)
        playerDiv.appendChild(iplayer)
        players.push(ipc,iplayer)
    }

    let resultPc = ipc.className.split('-')[2]
    let resultPlayer = iplayer.className.split('-')[2]
    let finalResult = checkResult(resultPlayer, resultPc)
    result.textContent = finalResult
    
}


// displayPC.append(rock)


const whoWon = function(playerWon){
    let result;
    if (playerWon == "tie"){
        result = "TIE!"
    } else if (playerWon) {
        result = "You Won!"
    } else {
        result = "You loosed!"
    }
    return result
}

function checkResult(userChoice, pcChoice) {
    if (userChoice === pcChoice) {
        return whoWon("tie");
    
    } else if (userChoice === 'rock' && pcChoice === 'paper') {
        return whoWon(false)

    } else if (userChoice === 'paper' && pcChoice === 'scissors') {
        return whoWon(false)
    
    } else if (userChoice === 'scissors' && pcChoice === 'rock') {
        return whoWon(false)

    } else if (userChoice === 'paper' && pcChoice === 'rock') {
        return whoWon(true)
    
    } else if (userChoice === 'scissors' && pcChoice === 'paper') {
        return whoWon(true)

    } else if (userChoice === 'rock' && pcChoice === 'scissors') {
        return whoWon(true)
    }
    
}









