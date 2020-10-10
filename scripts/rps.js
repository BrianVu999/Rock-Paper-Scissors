/*
* rps.js: 2th July 2020
* Nam Vu
*/

// DON'T TOUCH, Just Read  --------------
// array of moves/ids
var pics = ["rock", "paper", "scissors"];
// load the page elements
document.addEventListener("DOMContentLoaded", init, false);
//---------------------------------------

var results = ["You Win!", "You Lose!", "It's a Tie!"];
var compScore = 0;
var playerScore = 0;
// I have added the event listener in the loop creating images in init function

function getComputerMove() {
    let randomNo = Math.floor(Math.random() * 3);
    //Display computer's choose
    document.getElementById("comp-img").src = "images/" + pics[randomNo] + ".png";
    return randomNo;
}

var move = function move(event) {
    //Display border of picture choosen by player
    for (var i = 0; i < 3; i++) {
        document.images[i].className = "rps-img no-img-border";
    }
    event.target.className = "rps-img img-border";

    //Get moves from player and computer
    var comMove = getComputerMove();
    var playerMove = pics.indexOf(event.target.id);

    //Get the result
    var isTie = false;
    var result;
    if (comMove === playerMove) {//display a tie result
        isTie = true;
        document.getElementById("output").innerHTML = results[2];
    }
    else if (playerMove === 0 && (comMove === 1 || comMove === 2)) {
        result = (comMove === 2) ? 0 : 1;
    }
    else if (playerMove === 1 && (comMove === 0 || comMove === 2)) {
        result = (comMove === 0) ? 0 : 1;
    }
    else if (playerMove === 2 && (comMove === 0 || comMove === 1)) {
        result = (comMove === 1) ? 0 : 1;
    }

    //Display the result if it is not a tie
    if (!isTie) {
        document.getElementById("output").innerHTML = results[result];
        if (result === 0) playerScore++;
        else compScore++;
    }
    //Update score in the board
    document.getElementById("user-score").innerHTML = playerScore;
    document.getElementById("comp-score").innerHTML = compScore;
}

function init() {
    // HEADER
    var imgContainer = document.getElementById("img-container");
    var temp = document.createElement("header");
    document.body.insertBefore(temp, imgContainer);
    var temp2 = document.createElement("h1");
    temp.appendChild(temp2);
    temp = document.createTextNode("Play Rock, Paper, Scissors!");
    temp2.appendChild(temp);

    // BODY
    // - PLAYER GAME HEADER
    temp = document.createElement("div");
    document.body.insertBefore(temp, imgContainer);
    temp.className = "game-header";
    temp2 = document.createTextNode("Choose your method of destruction:");
    temp.appendChild(temp2);
    // - PLAYER CHOOSES METHOD
    temp2 = ["images/rock.png", "images/paper.png", "images/scissors.png"];
    for (i = 0; i < pics.length; i++) {
        temp = document.createElement("img");
        imgContainer.appendChild(temp);
        temp.className = "rps-img no-img-border";
        temp.id = pics[i];
        temp.src = temp2[i];
        //ADD EVENT LISTENER
        temp.addEventListener("click", move);
    }

    // - COMPUTER GAME HEADER
    temp = document.createElement("div");
    document.body.appendChild(temp);
    temp.className = "game-header";
    temp2 = document.createTextNode("The computer chooses:");
    temp.appendChild(temp2);
    // - COMPUTER CHOOSES METHOD
    temp = document.createElement("table");
    document.body.appendChild(temp);
    temp2 = document.createElement("tr");
    temp.appendChild(temp2);
    temp = document.createElement("td");
    temp2.appendChild(temp);
    temp2 = document.createElement("img");
    temp2.className = "rps-img";
    temp2.id = "comp-img";
    temp.appendChild(temp2);

    temp = document.getElementsByTagName("tr")[0];
    temp2 = document.createElement("td");
    temp2.className = "vert-center";
    temp.appendChild(temp2);
    temp = document.createElement("div");
    temp.id = "output";
    temp2.appendChild(temp);

    // - GAME RESULT
    var scoreBox = document.createElement("div");
    document.body.appendChild(scoreBox);
    scoreBox.id = "score";
    temp = document.createElement("div");
    temp2 = document.createTextNode("Score:");
    temp.appendChild(temp2);
    scoreBox.appendChild(temp);

    temp = document.createElement("div");
    scoreBox.appendChild(temp);
    temp2 = document.createTextNode("You:  ");
    temp.appendChild(temp2);
    temp2 = document.createElement("span");
    temp2.id = "user-score";
    temp.appendChild(temp2);

    temp = document.createElement("div");
    scoreBox.appendChild(temp);
    temp2 = document.createTextNode("Computer:  ");
    temp.appendChild(temp2);
    temp2 = document.createElement("span");
    temp2.id = "comp-score";
    temp.appendChild(temp2);

    //FOOTER
    temp = document.createElement("footer")
    document.body.appendChild(temp);
    temp2 = document.createTextNode("Copyright © 2017 Wendi Jollymore");
    temp.appendChild(temp2);
}