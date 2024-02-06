


let secretNumber = Math.trunc(Math.random() *20 +1) 
console.log(secretNumber);
let score = 20;

function dispMessage(msg){
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
   // console.log(guess)

    if (!guess){
       dispMessage('Input a number')
    }else if (Number(guess) === secretNumber){
        dispMessage('You Won the game');
        document.querySelector('.num').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.highscore').textContent = score;
    }else if (Number(guess) !== secretNumber){
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.check').textContent='Try Again'
             dispMessage(Number(guess) > secretNumber?  'Too High': 'Too Low') 
        } else{
                dispMessage('You Lose')
        }
    }
})


document.querySelector('.playAgain').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() *20 +1) 
    console.log('new secret num' , secretNumber)
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.num').textContent='?';
    document.querySelector('.check').textContent='Check'
    
})