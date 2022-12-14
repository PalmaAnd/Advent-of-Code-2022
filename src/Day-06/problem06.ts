import * as fs from "fs";

const input = fs
    .readFileSync("src/Day-06/input.txt", "utf-8");

let neededCharacters = 0;

let solution = [];

// Go trough each character
input.split("").forEach(element => {
    // If there aren't 4 different elements found
    if (solution.length < 4) {
        // If a element is found which already is inside the array reset it
        if (solution.includes(element)) {
            solution = [];
        }
        solution.push(element);
        neededCharacters++;
    }
});

console.log(solution);
console.log(neededCharacters);
