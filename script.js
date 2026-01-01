'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
const guess =Number((document.querySelector('.guess').value));
console.log(guess);

// No input mtlab koi text nhi
if(!guess){
    // document.querySelector('.message').textContent = '⛔️ NO number!';
   displayMessage('⛔️ No number!');
} 
// Jb guess shi ho
else if (guess === secretNumber){
//  document.querySelector('.message').textContent = '🎉 Correct Number!';
displayMessage('🎉 Correct Number!');

 document.querySelector('.number').textContent = secretNumber;

 document.querySelector('body').style.backgroundColor = '#60b347';

 document.querySelector('.number').style.width = '30rem';

 if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
 }
}
// JB Guess different ho
else if (   guess!== secretNumber){
 
    if(score > 1){
    // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' :  '📉 Too Low!'

    displayMessage(guess > secretNumber ? '📈 Too high!' :  '📉 Too Low!');

    score--;

    document.querySelector('.score').textContent = score;

} else {
    // document.querySelector('.message').textContent = '💥 You lost the game';

    displayMessage('💥 You lost the game');

    document.querySelector('.score').textContent = 0;
}
}
// same code but with more line of code
 /* // Agr guess bda ho
else if(guess > secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent = '📈 Too high!'

    score--;

    document.querySelector('.score').textContent = score;

} else {
    document.querySelector('.message').textContent = '💥 You lost the game';

    document.querySelector('.score').textContent = 0;

}
}  // Agr guess chota ho
else if(guess < secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent = '📉 Too Low!'

    score--;

    document.querySelector('.score').textContent = score;

} else {
    document.querySelector('.message').textContent = '💥 You lost the game';

    document.querySelector('.score').textContent = 0;
}
} */
});

document.querySelector('.again').addEventListener('click',function(){
 secretNumber = Math.trunc(Math.random() * 20) + 1
 score = 20;

// document.querySelector('.message').textContent = 'Start guessing....';

displayMessage('Start guessing....');

document.querySelector('.score').textContent = score;

document.querySelector('.number').textContent = '?';

document.querySelector('.guess').value = '';

 document.querySelector('body').style.backgroundColor = '#222';

 document.querySelector('.number').style.width = '15rem';

})

