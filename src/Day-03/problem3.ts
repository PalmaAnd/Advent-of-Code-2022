import * as fs from "fs";

const input = fs.readFileSync("src/Day-03/input.txt", "utf-8");
const rucksacks = input.split("\n");

// Generate an array with all letters to later read out the index of it
const allLetters = generateAlphabetFromTo();

let compartmentA;
let compartmentB;

let result = 0;

let elementFound = false;

// Circle trough all entries of the list
rucksacks.forEach((rucksack) => {
    elementFound = false;
    
    // Create two string containing both the first and the second half of the string
    compartmentA = rucksack.substring(0, rucksack.length / 2);
    compartmentB = rucksack.substring(rucksack.length / 2);

    // For each letter circle trough both compartments and check if the letter can be found in both
    compartmentA.split("").forEach((element) => {
        if (compartmentB.indexOf(element) >= 0 && !elementFound) {
            // If so, set the bool to true, to stop thee circle
            elementFound = true;
            // Add the index of the elemtn to the results
            result += allLetters.indexOf(element);
        }
    });
});

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
    /* Unshift adds an element at the beginning of the array, I do this so I 
     can use the index of the letter without increasing it by one */
    alphabet.unshift("");
    return alphabet;
}
