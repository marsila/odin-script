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
const roundResultText = document.getElementById('round-result');
const finalResultText = document.getElementById('final-result');

function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3 )+1;
    if (randomNum ===1) 
        return 'Rock';
    else if(randomNum === 2)
        return 'Peaper';
    else return 'Sciessers';
}

btn.addEventListener('click', () => {  

    const selectedRadio = document.querySelector('input[name="user-choice"]:checked');
    if(selectedRadio) {
        let selectedChoice = selectedRadio.value ;
        let computerChoice = getComputerChoice();
        output.innerText =`Your choice is : ${selectedChoice}`;
        computerChoiceText.innerText = `The computer choice is ${computerChoice}`;
        console.log(`clicked ${selectedChoice}`);
        selectedRadio.checked = false;

    }else {
        output.innerText = 'Please make a selection first!'
        computerChoiceText.innerText = 'Please make a selection first!';
    }
    
 }
)



