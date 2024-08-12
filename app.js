let gameseq = [];
let userseq = [];
let btn = ["red", "yellow", "green", "blue"];
let started = false;
let level = 0;
let score = 0; // Added score variable

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("Game is started!");
        started = true;
        levelup();
    }
});

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level} - Score: ${score}`; // Display the score
    let rndminx = Math.floor(Math.random() * 4);
    let rndmclr = btn[rndminx];
    let rndmbtn = document.querySelector(`.${rndmclr}`);
    console.log(rndminx);
    console.log(rndmbtn);
    console.log(rndmclr);
    gameseq.push(rndmclr);
    console.log(gameseq);
    //rndm btn flash
    btnflash(rndmbtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            score++; // Increase the score
            setTimeout(() => {
                levelup();
            }, 1000); // Delay before starting the next level
        }
    } else {
        h2.innerText = `Game over! Your score is ${score}. Press any key to restart the game.`;
        resetGame();
    }
}

function resetGame() {
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
    score = 0; // Reset the score
}

function btnPress() {
    console.log(this);
    let btn = this;
    userflash(btn);

    userclr = btn.getAttribute("id");
    console.log(userclr);
    userseq.push(userclr);

    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
allbtns.forEach(btn => {
    btn.addEventListener("click", btnPress);
});
