import * as fs from "fs";

const input = fs.readFileSync("Day-2/input.txt", "utf-8");
const shapes = input.split("\n");

let playedHand = [];

let playerPoints = 0;

shapes.forEach((shape) => {
    let playerRoundPoints = 0;

    shape = shape.replace("\r", "");
    playedHand = shape.split(" ");

    playerRoundPoints = calcPoints(playedHand[1]);

    if (playerRoundPoints == 3) {
        if (playedHand[0] == "A") {
            playerRoundPoints += 1;
        } else if (playedHand[0] == "B") {
            playerRoundPoints += 2;
        } else {
            playerRoundPoints += 3;
        }
    } else if (playerRoundPoints == 6) {
        if (playedHand[0] == "A") {
            playerRoundPoints += 2;
        } else if (playedHand[0] == "B") {
            playerRoundPoints += 3;
        } else {
            playerRoundPoints += 1;
        }
    } else {
        if (playedHand[0] == "A") {
            playerRoundPoints += 3;
        } else if (playedHand[0] == "B") {
            playerRoundPoints += 1;
        } else {
            playerRoundPoints += 2;
        }
    }

    playerPoints += playerRoundPoints;
});

console.log(playerPoints);

function calcPoints(hand: string) {
    if (hand == "Y") {
        return 3;
    } else if (hand == "Z") {
        return 6;
    } else if (hand == "X") {
        return 0;
    }
    return 0;
}
