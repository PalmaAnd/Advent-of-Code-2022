import * as fs from "fs";

const input = fs.readFileSync("src/Day-3/input.txt", "utf-8");
const rucksacks = input.split("\n");

const allLetters = generateAlphabetFromTo();

let compartmentA;
let compartmentB;

let result = 0;

let elementFound = false;

rucksacks.forEach((rucksack) => {
    elementFound = false;
    
    compartmentA = rucksack.substring(0, rucksack.length / 2);
    compartmentB = rucksack.substring(rucksack.length / 2);

    compartmentA.split("").forEach((element) => {
        if (compartmentB.indexOf(element) >= 0 && !elementFound) {
            result += allLetters.indexOf(element);
            elementFound = true;
        }
    });
});

console.log(result);


function generateAlphabetFromTo(): string[] {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let alphabet = letters.split("");
    alphabet.forEach((letter) => {
        alphabet.push(letter.toUpperCase());
    });

    alphabet.unshift("");
    return alphabet;
}
