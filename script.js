let input = document.getElementById("input");
let bttns = document.getElementById("bttns");
let result = document.getElementById("result");
let usrdet = document.getElementById("usrdet");
let btnId = document.getElementById("btn");
let rounds = 0;
let arr = [1, 2, 3];
let compoints = 0;
let playerpoints = 0;
let balance = 0;
let gameround = 0;

btnId.onclick = function () {
    input.classList.add("hide");
    bttns.classList.remove("hide");
    result.classList.remove("hide");
    usrdet.classList.remove("hide");
    let usr = document.getElementById("name").value;
    rounds = document.getElementById("dropdown").value;

    if (usr) {
        document.getElementById("usrname").textContent = usr.toUpperCase();
    }
    balance = rounds;
    updateBalance();
};

function ran(len) {
    return Math.floor(Math.random() * len);
}

function updateBalance() {
    let balanceElement = document.getElementById("balcal");
    balanceElement.textContent = balance;
}

function draw(resultid, gif) {
    gif.setAttribute("src", "./assests/handshake.gif");
    resultid.style.color = "blue";
    resultid.textContent = `Draw, You Have a Chance To Beat Me!`;
    let drawtrk = new Audio("./assests/drawtrack.mp3");
    drawtrk.play();
}

function win(resultid, gif) {
    gif.setAttribute("src", "./assests/laugh.gif");
    resultid.style.color = "red";
    resultid.textContent = `You are a Loser, Better Luck Next Time`;
    let loosetrk = new Audio("./assests/loosetrack.mp3");
    loosetrk.play();
}

function loose(resultid, gif) {
    gif.setAttribute("src", "./assests/sad.gif");
    resultid.style.color = "green";
    resultid.textContent = `You Win!, I will Beat You Next Time`;
    let wintrk = new Audio("./assests/wintrack.mp3");
    wintrk.play();
}

function Solve(cmp, usr) {
    let rps = ["Rock", "Paper", "Scissor"];
    let wrong = new Audio("./assests/wrong.mp3");
    let correct = new Audio("./assests/correct.mp3");
    let draw = new Audio("./assests/draw.mp3");
    if (cmp == 1 && usr == 3) {
        compoints++;
        wrong.play();
    } else if (cmp == 3 && usr == 1) {
        playerpoints++;
        correct.play();
    } else if (usr < cmp) {
        compoints++;
        wrong.play();
    } else if (cmp < usr) {
        playerpoints++;
        correct.play();
    }else{
        draw.play();
    }
    balance--;
    updateBalance();

    let compoint = document.getElementById("cmpcal");
    let usrpoint = document.getElementById("usrcal");

    compoint.textContent = compoints;
    usrpoint.textContent = playerpoints;

    let selectdet = document.getElementById("selectdet");
    selectdet.textContent = `I Choose "${rps[cmp - 1]}" & You Choose "${rps[usr - 1]}"`;
}

let oncemore = document.getElementById("oncemore");

function showtry(gameround, rounds) {
    if (gameround == rounds) {
        bttns.classList.add("hide");
        setTimeout(function(){
            result.classList.add("hide");
            usrdet.classList.add("hide");
            let gifs = document.getElementById("gifs");
            gifs.classList.remove("hide");
            oncemore.classList.remove("hide");
            let results = document.getElementById("res");
            let gif = document.getElementById("gif");
            if (compoints == playerpoints) {
                draw(results, gif);
            } else if (compoints < playerpoints) {
                loose(results, gif);
            } else {
                win(results, gif);
            }
        },2000);
        
    }
}

function tryagain() {
    location.reload();
}

function Rock_solve() {
    let computerchoice = arr[ran(arr.length)];
    let userchoice = 1;
    Solve(computerchoice, userchoice);
    gameround++;
    showtry(gameround, rounds);
}

function Paper_solve() {
    let computerchoice = arr[ran(arr.length)];
    let userchoice = 2;
    Solve(computerchoice, userchoice);
    gameround++;
    showtry(gameround, rounds);
}

function Scissor_solve() {
    let computerchoice = arr[ran(arr.length)];
    let userchoice = 3;
    Solve(computerchoice, userchoice);
    gameround++;
    showtry(gameround, rounds);
}
