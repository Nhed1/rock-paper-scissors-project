let pcDiv = document.querySelector('.pcDiv')
let playerDiv = document.querySelector('.playerDiv')
let buttons = document.querySelectorAll('button')

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
    let players = []
    players.push(iplayer, ipc)
    if (players.length == 0){
        playerDiv.appendChild(players[0])
        pcDiv.appendChild(players[1])
    }
    players = []
    
}


// displayPC.append(rock)

// const whoWon = function(playerWon){
//     let result;
//     if (playerWon == "tie"){
//         result = "TIE!"
//     } else if (playerWon) {
//         result = "Player Won!"
//     } else {
//         result = "PC Won!"
//     }
//     return result
// }


    
// function checkResult(userChoice, pcChoice) {
//     if (userChoice === pcChoice) {
//         return whoWon("tie");
    
//     } else if (userChoice === 3 && pcChoice === 1) {
//         return whoWon(false)
    
//     } else if (userChoice === 1 && pcChoice === 3) {
//         return whoWon(true)
    
//     } else if (userChoice > pcChoice) {
//         return whoWon(true)
    
//     } else {
//         return whoWon(false)
//     }
    
// }









