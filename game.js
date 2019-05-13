const r = document.querySelector('#Rock');
const p = document.querySelector('#Paper'); 
const s = document.querySelector('#Scissors'); 

function getUserChoice()
{
    r.addEventListener('click', function(){
        run("Rock");
        console.log(" Rock selected! ");
    })
    p.addEventListener('click', function(){
        run("Paper");
        console.log(" Paper selected! ");    
    })
    s.addEventListener('click', function(){
        run("Scissors");
        console.log(" Scissors selecetd! ");
    })
}
getUserChoice();

function getChoiceOfComputer()
{
    const select =["Rock", "Paper", "Scissors"];
    const chance = Math.floor(Math.random()*3);
    return select[chance];
}

function run(userChoice)
{
    const computer = getChoiceOfComputer();
    messagee.textContent =`Computer chose ${computer} `; 
    if(userChoice === computer)
    {
        messagee.textContent = `There was a tie, Play again!`;
        message.textContent = ` `;
    }
    else if(userChoice ==="Rock" && computer === "Scissors" 
    || userChoice ==="Scissors" && computer === "Paper" 
    ||userChoice ==="Paper" && computer === "Rock")
    {
        message.textContent =`Player Won! `;
    }
    else if(userChoice ==="Scissors" && computer === "Rock" 
    || userChoice ==="Paper" && computer === "Scissors" 
    ||userChoice ==="Rock" && computer === "Paper")
    {
        message.textContent =`Computer Won! `;
    }  
}