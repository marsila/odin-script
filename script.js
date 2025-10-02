const rock = document.getElementById('rock');
const papear = document.getElementById('papear');
const scissers = document.getElementById('scissers');
const userSelection = document.getElementById('user-selection');
// console.log(`user: ${rock}`);
// function userChoise(event) {
//     let userChoise = event.target;
//     console.log(`user choise: ${userChoise.id}`);
//     output.innerText =`Your choies is : ${userChoise.id}`;
// }
// rock.addEventListener('input', userChoise);
// papear.addEventListener('input',userChoise);
// scissers.addEventListener('input', userChoise);



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


//function getUserChoice(){
    userSelection.addEventListener('click', (event)=>{
        let userChoice;
        const computerSelectedChoice = getComputerChoice();
        if(event.target.tagName === 'BUTTON'){
            console.log(`the clicked one is ${event.target.id}`);
            userChoice = event.target.id;
            output.innerText =`Your choice is : ${userChoice}`;
            computerChoiceText.innerText = `The computer choice is ${computerSelectedChoice}`;
        }
    })
//}

//let x=0;

// papear.addEventListener('click', () => { 
//     console.log('clicked papear');
//         //let computerSelectedChoice = getComputerChoice();
//         //output.innerText =`Your choice is : Paper`;
//        // computerChoiceText.innerText = `The computer choice is ${computerSelectedChoice}`;
//         //playRound(selectedChoice, computerSelectedChoice);
// //  x++;
// //  if (x >= 5){
// //     btn.disabled = true; 
// //     playAgain.innerHTML = `<button onclick= window.location.reload()>Play Agin </button>`
// // }
// })

// function playRound(userChoice, computerChoice) {
    
//     if (userChoice ==computerChoice){
//         console.log('the same');
        
//     }else {
//             if (userChoice =='Rock' && computerChoice =='Papear' ){
//                 computerPoints++;
//                 console.log(`c+ = ${computerPoints} , u = ${userPoints} `);                
//             }                
//             else if (userChoice == 'Rock' && computerChoice == 'Scissers'){
//                 userPoints++;
//                 console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
//             }    
//             else if (userChoice == 'Scissers' && computerChoice == 'Rock'){
//                 computerPoints++;
//                 console.log(`c+ = ${computerPoints} , u = ${userPoints} `);
//             }
//             else if (userChoice == 'Scissers' && computerChoice == 'Papear') {
//                 userPoints++;
//                 console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
//             }
//             else if (userChoice == 'Papear' && computerChoice == 'Rock') {
//                 userPoints++;
//                 console.log(`c = ${computerPoints} , u+ = ${userPoints} `);
//             }
//             else if (userChoice == 'Papear' && computerChoice == 'Scissers') {
//                 computerPoints++;
//                 console.log(`c+ = ${computerPoints} , u = ${userPoints} `);
//             }
//     }
//     console.log(`cf = ${computerPoints} , uf = ${userPoints} `);
    
//     userResultText.innerText =`${userPoints}`;
//     computerResultText.innerText = `${computerPoints}`;
    
//     if (userPoints > computerPoints) {
//       finalResultText.innerText = `The winner is the User!`;  
//     } else if (userPoints < computerPoints){
//       finalResultText.innerText = `The winner is the Computer!` ; 
//     } else {finalResultText.innerText =`It's tight!`}

// }



