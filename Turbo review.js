// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console


let faveDrink = 'Tropicana Lemonade'

console.log(faveDrink.trim())

//let favDrink = 'Fresh squeezed Lemonade'
//favDrink.trim()
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let v = ' I dont want your apple pie mama'

alert(v.split(' ').includes('apple'))
//if ( v.search('apple'))
//if ( multiWords.search('apple') !== - 1{
//console.log('yes')
//}else {
  //  console.log('no')
//}
//alert(multiWords)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor(){
let random = Math.random()
if ( random < 0.33){
return 'rock'
}else if ( random < 0.66){
    return 'paper'
}else {
    return 'scissor'
}
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function choices(playerChoice){
    let botChoice = rockPaperScissor()
 if (playerChoice === 'rock'&& botChoice === 'scissors'||
    playerChoice === 'scissors'&& botChoice === 'paper'|| playerChoice === 'paper'&& botChoice === 'rock'){
        console.log('You win')
}else if (playerChoice === botChoice){
    console.log('Tie')
}else{
    console.log('You lose')
}}
choices('rock')

function checkWin(playerChoice){
    let botChoice = rockPaperScissor()
    if ( playerChoice === 'rock' && botChoice === 'scissor' || playerChoice === 'scissor' && botChoice === 'paper'
    || playerChoice === 'paper' && botChoice === 'rock')
    {
    console.log('You win')
    }else if (botChoice === 'rock' && playerChoice === 'scissor' || botChoice === 'scissor' && playerChoice === 'paper'
    || botChoice === 'paper' && playerChoice === 'rock'){
        console.log('You Lose')
    }else if (playerChoice === botChoice)
    
    { 
        console.log('You Tied')
    }
    }
    checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function playGamesXTimes(arr){
    arr.forEach( choice => checkWin(choice))
}

playGamesXTimes(['rock', 'paper'])
