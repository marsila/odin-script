const rock = document.getElementById('rock');
const papear = document.getElementById('papear');
const scissors = document.getElementById('scissors');
const userSelection = document.getElementById('user-selection');
// console.log(`user: ${rock}`);
// function userChoise(event) {
//     let userChoise = event.target;
//     console.log(`user choise: ${userChoise.id}`);
//     output.innerText =`Your choies is : ${userChoise.id}`;
// }
// rock.addEventListener('input', userChoise);
// papear.addEventListener('input',userChoise);
// scissors.addEventListener('input', userChoise);



const output = document.getElementById('output');
const computerChoiceText = document.getElementById('computer-choice');
const userResultText = document.getElementById('user-points');
const computerResultText = document.getElementById('computer-points');
const finalResultText = document.getElementById('final-result');
const playAgain = document.getElementById('play-again');
let userPoints = 0;
let computerPoints = 0;


//let computerRandomChoice = () => Math.floor(Math.random()*3 )+1;

let  getComputerChoice = () => {
    let randomNum = Math.floor(Math.random()*3 )+1;
    if (randomNum ===1) 
        return 'Rock';
    else if(randomNum === 2)
        return 'Papear';
    else return 'Scissors';
}

    userSelection.addEventListener('click', (event)=>{
       let userChoice;
       let computerChoice = getComputerChoice();
        if(event.target.tagName === 'BUTTON'){
            console.log(`the clicked one is ${event.target.id}`);
            userChoice = event.target.id;
            output.innerText =`Your choice is : ${userChoice}`;
            computerChoiceText.innerText =`Computer choice is : ${computerChoice}`;
            console.log(`outside if ${userChoice}`);
            playRound(userChoice, computerChoice) ;
        }        
    })



function playRound(userChoice, computerChoice) {
    console.log(`computer = ${computerChoice} user = ${userChoice}`);    
    
    if (userChoice ===computerChoice){
        console.log('the same');
        
     }else {
            if (userChoice ==='Rock' && computerChoice =='Papear' ){
                computerPoints++;
                console.log(`c+ = ${computerPoints} , u = ${userPoints} `);                
            }                
            else if (userChoice === 'Rock' && computerChoice == 'Scissors'){
                userPoints++;
                console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
            }    
            else if (userChoice === 'Scissors' && computerChoice == 'Rock'){
                computerPoints++;
                console.log(`c+ = ${computerPoints} , u = ${userPoints} `);
            }
            else if (userChoice === 'Scissors' && computerChoice == 'Papear') {
                userPoints++;
                console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
            }
            else if (userChoice === 'Papear' && computerChoice == 'Rock') {
                userPoints++;
                console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
            }
            else if (userChoice === 'Papear' && computerChoice == 'Scissors') {
                computerPoints++;
                console.log(`c+ = ${computerPoints} , u = ${userPoints} `);
            }
    }
    console.log(`cf = ${computerPoints} , uf = ${userPoints} `);
    
    userResultText.innerText =`${userPoints}`;
    computerResultText.innerText = `${computerPoints}`;
    
    if (userPoints > computerPoints) {
      finalResultText.innerText = `The winner is the User!`;  
    } else if (userPoints < computerPoints){
      finalResultText.innerText = `The winner is the Computer!` ; 
    } else {finalResultText.innerText =`It's tight!`}

}


