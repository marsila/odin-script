// let rock = document.getElementById('rock');
// let papear = document.getElementById('papear');
// let scissers = document.getElementById('scissers')
// console.log(`user: ${rock}`);
// function userChoise(event) {
//     let userChoise = event.target;
//     console.log(`user choise: ${userChoise.id}`);
//     output.innerText =`Your choies is : ${userChoise.id}`;
// }
// rock.addEventListener('input', userChoise);
// papear.addEventListener('input',userChoise);
// scissers.addEventListener('input', userChoise);


const btn = document.querySelector('#btn');
const output = document.getElementById('output');
const computerChoiceText = document.getElementById('computer-choice');
const userResultText = document.getElementById('user-points');
const computerResultText = document.getElementById('computer-points');
const finalResultText = document.getElementById('final-result');
const playAgain = document.getElementById('play-again');
let userPoints = 0;
let computerPoints = 0;


//let computerRandomChoice = () => Math.floor(Math.random()*3 )+1;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3 )+1;
    if (randomNum ===1) 
        return 'Rock';
    else if(randomNum === 2)
        return 'Papear';
    else return 'Scissers';
}

let x=0;

btn.addEventListener('click', () => {
 
//while ( x < 5){
    const selectedRadio = document.querySelector('input[name="user-choice"]:checked');
    console.log(`bool: ${selectedRadio}`);
    
    if(selectedRadio) {
        let selectedChoice = selectedRadio.value ;
        let computerSelectedChoice = getComputerChoice();
        output.innerText =`Your choice is : ${selectedChoice}`;
        computerChoiceText.innerText = `The computer choice is ${computerSelectedChoice}`;
        playRound(selectedChoice, computerSelectedChoice);
        console.log(`clicked ${selectedChoice} + ${computerSelectedChoice}`);
        selectedRadio.checked = false;

    }else {
        output.innerText = 'Please make a selection first!'
        computerChoiceText.innerText = 'Please make a selection first!';
    }
  //x++;  
 //}
 x++;
 if (x >= 5){
    btn.disabled = true; 
    playAgain.innerHTML = `<button onclick= window.location.reload()>Play Agin </button>`
}
}
)

function playRound(userChoice, computerChoice) {
    
    if (userChoice ==computerChoice){
        console.log('the same');
        
    }else {
            if (userChoice =='Rock' && computerChoice =='Papear' ){
                computerPoints++;
                console.log(`c+ = ${computerPoints} , u = ${userPoints} `);                
            }                
            else if (userChoice == 'Rock' && computerChoice == 'Scissers'){
                userPoints++;
                console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
            }    
            else if (userChoice == 'Scissers' && computerChoice == 'Rock'){
                computerPoints++;
                console.log(`c+ = ${computerPoints} , u = ${userPoints} `);
            }
            else if (userChoice == 'Scissers' && computerChoice == 'Papear') {
                userPoints++;
                console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
            }
            else if (userChoice == 'Papear' && computerChoice == 'Rock') {
                userPoints++;
                console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
            }
            else if (userChoice == 'Papear' && computerChoice == 'Scissers') {
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



