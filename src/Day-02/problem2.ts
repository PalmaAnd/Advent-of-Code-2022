import * as fs from "fs";

const input = fs.readFileSync("src/Day-02/input.txt", "utf-8");
const shapes = input.split("\n");

let playedHand = [];

let playerPoints = 0;
let elfPoints = 0;

shapes.forEach((shape) => {
    
    let playerRoundPoints = 0;
    let elfRoundPoints = 0;

    shape = shape.replace("\r", "");
    playedHand = shape.split(" ");

    elfRoundPoints = calcPoints(playedHand[0]);
    playerRoundPoints = calcPoints(playedHand[1]);
    
    if (elfRoundPoints == playerRoundPoints) {
        elfRoundPoints += 3;
        playerRoundPoints += 3;
    } else if (playedHand[0] == 'A' && playedHand[1] == 'Y'
        || playedHand[0] == 'B' && playedHand[1] == 'Z'
        || playedHand[0] == 'C' && playedHand[1] == 'X'
    ){
        playerPoints += 6;
    } else {
        elfPoints += 6;
    }

    elfPoints += elfRoundPoints;
    playerPoints += playerRoundPoints;

});

console.log(playerPoints);


function calcPoints(hand:string) {
    if (hand == 'A' || hand == 'X') {
        return 1;
    } else if (hand == 'B' || hand == 'Y') {
        return 2;
    } else if (hand == 'C' || hand == 'Z') {
        return 3;
    }
    return 0;
}