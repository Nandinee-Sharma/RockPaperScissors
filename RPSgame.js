let body = document.querySelector("body")
let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");

const generate = ()=> {
    let choices = ["Rock", "Paper", "Scissors"]; //we want to randomly generate any choice
    //rock, paper, scissors
    let idx = Math.floor(Math.random()*3); //number is generated from 0 to 2(3 exclusive)
    return choices[idx];
}

const drawGame = ()=> {
    console.log("This was a draw.");
    msg.innerText = "The game was draw. Play again?"
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user");
let comp_score = document.querySelector("#comp");
const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        msg.innerText = `You won! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userscore++;
        user_score.innerText = userscore; 
    }  
    else{
        msg.innerText = `You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "darkred";
        msg.style.color = "white";
        compscore++;
        comp_score.innerText = compscore;
    }
}
const playGame = (userchoice) => {
    //generating computer's choice
    let compchoice = generate();
    console.log("Computer chose",compchoice);
    if(userchoice==compchoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userchoice==="Rock"){
            userwin = compchoice=== "Paper"? false:true;
        }
        else if(userchoice==="Paper"){
            userwin = compchoice=== "Scissors"? false:true;
        }
        else{
            userwin = compchoice=== "Rock"? false: true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const user_choice = choice.getAttribute("id");
        console.log("You chose", user_choice);
        playGame(user_choice);
    });
});