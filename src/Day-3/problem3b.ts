import * as fs from "fs";

const input = fs.readFileSync("src/Day-3/input.txt", "utf-8");
const rucksacks = input.split("\n");

const allLetters = generateAlphabetFromTo();


let result = 0;
let elementFound = false;

for (let i = 0; i < rucksacks.length; i += 3) {
    elementFound = false;
    
    const first = rucksacks[i];
    const second = rucksacks[i+1];
    const third = rucksacks[i+2];
    
    first.split('').forEach(letter => {
        if (second.indexOf(letter) >= 0 && third.indexOf(letter) >= 0 && !elementFound) {

            elementFound = true;
            result +=  allLetters.indexOf(letter) + 1;
        }
    });
    
}

console.log(result);

function generateAlphabetFromTo(): string[] {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let alphabet = letters.split("");
    alphabet.forEach((letter) => {
        alphabet.push(letter.toUpperCase());
    });
    return alphabet;
}
