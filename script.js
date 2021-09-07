function random(){
    return Math.floor(Math.random() * 3) + 1;
}

userWon = () => console.log("User won!");
    
pcWon = () => console.log("Pc won!")

tie = () => console.log("it's a tie")
    
function score(){
    console.log(`User choice = ${choices[userChoice -1]} `)
    console.log(`PC choice = ${choices[pcChoice -1]} `)    
}

let userChoice = parseInt(prompt("Choose between 1-Rock, 2-Paper or 3-Scissor."))
let pcChoice = random();
let choices = ["Rock", "Paper", "Scissor"]
let ERROR = false;

if (ERROR === false) { // this is used to avoid erros
    score()  
}

if (userChoice > 3 || userChoice < 1){
    console.log("This is not a option")
    ERROR = true;

} else if (userChoice === pcChoice) {
    tie();

} else if (userChoice === 3 && pcChoice === 1) {
    pcWon()

} else if (userChoice === 1 && pcChoice === 3) {
    userWon()

} else if (userChoice > pcChoice) {
    userWon()

} else {
    pcWon()
}







