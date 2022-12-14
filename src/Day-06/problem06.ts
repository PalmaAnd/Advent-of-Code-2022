import * as fs from "fs";

// Remove all \r for Windows and remove whitespaces and the end
const input = fs
    .readFileSync("src/Day-06/input.txt", "utf-8");

let neededCharacters = 0;

let solution = [];
// I need 4 following elemnts which are not the same
input.split("").forEach(element => {

    if (solution.length < 4) {
        if (solution.includes(element)) {
            solution = [];
        }
        solution.push(element);
        neededCharacters++;
    }
});

console.log(solution);
console.log(neededCharacters);
