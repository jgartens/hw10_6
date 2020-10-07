let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getCompChoice(){
    const choices = ['r', 'p','s'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    return compChoice;
}
function convertToWord(letter){
    if (letter === "r"){ return "Rock"};
    if (letter === "s"){ return "Scissors"};
    if (letter === "p"){ return "Paper"};
}
function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(user) + "(user beats " + convertToWord(comp) + ". You win!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('green-glow')}, 500);
}
function lose(user, comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(comp) + " beats " + convertToWord(user) + ". You Lose";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('red-glow')}, 500);
}
function draw(user, comp){
    result_p.innerHTML = "Both picked " + convertToWord(user) + ". Draw";
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('grey-glow')}, 500);
}

function game(userChoice){
    const compChoice = getCompChoice();
    
    switch(userChoice + compChoice){
        case "rs": case "sp": case "pr":
            win(userChoice, compChoice);
            break;
        case "sr": case "ps": case "rp":
            lose(userChoice, compChoice);
            break;
        case "rr": case "pp": case "ss":
            draw(userChoice, compChoice);
            break;
    }

}


function main(){

    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', function() {
        game("p");
        console.log("you picked p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
        console.log("you picked s");
    })

}

main();
