let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgs");

const userScorepara = document.querySelector("#user-score");
const comScorepara = document.querySelector("#com-score");


const genComChoice = () => {
    const option = ["rock","paper","scissors"] ;
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};

const drawgame = () => {
    msg.innertext= "game was draw.please try again";
    msg.style.backgroundcolor = "#081b31";
};

const showwinner = (userwin, userchoice, comchoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innertext = userScore;
        msg.innertext= `you win! ${userchoice} beats ${comchoice}`;
        msg.style.backgroundcolor = "green";
    } else {
        comScore++;
        comScorepara.innertext = comScore;
        msg.innertext= `you lose! ${comchoice} beats ${userchoice}`;
        msg.style.backgroundcolor = "red";
    }
}; 

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
        const comchoice = genComChoice();
    console.log("comp choice =", comchoice);

    if (userchoice === comchoice) {
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = comchoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            userwin = comchoice === "scissors" ? false : true;
        } else {
            comchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, comchoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userchoice = choice.getAttribute("id"); 
       playGame(userchoice);
    });
});
