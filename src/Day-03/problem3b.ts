import * as fs from "fs";

const input = fs.readFileSync("src/Day-03/input.txt", "utf-8");
const rucksacks = input.split("\n");

// Generate an array with all letters to later read out the index of it
const allLetters = generateAlphabetFromTo();

let result = 0;
let elementFound = false;

// Create a for loop to circle trough all entries but always take groups of 3 (for that we have the += 3)
for (let i = 0; i < rucksacks.length; i += 3) {
    elementFound = false;

    const first = rucksacks[i];
    const second = rucksacks[i + 1];
    const third = rucksacks[i + 2];

    // For each letter we check if it can be found inside one of the other two rucksacks and if no element has been found till now
    first.split("").forEach((letter) => {
        if (
            second.indexOf(!elementFound && letter) >= 0 &&
            third.indexOf(letter) >= 0
        ) {
            // If we find an element set the bool to true to stop the control
            elementFound = true;
            // Add the index + 1, because arrays begin at 0, to the result
            result += allLetters.indexOf(letter) + 1;
        }
    });
}

console.log(result);

/**
 * Helper function used to generate an array with all lower-case and upper-case letters
 * @returns an array containing all letters
 */
function generateAlphabetFromTo(): string[] {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let alphabet = letters.split("");
    alphabet.forEach((letter) => {
        alphabet.push(letter.toUpperCase());
    });
    return alphabet;
}
