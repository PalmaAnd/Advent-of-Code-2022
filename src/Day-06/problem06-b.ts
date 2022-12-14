import * as fs from "fs";

const input = fs.readFileSync("src/Day-06/input.txt", "utf-8");

let neededCharacters = 0;

let solution = [];

const message = input.split("");

// Go trough each character as long as the solution array does not contain 14 elements
for (let i = 0; i < message.length && solution.length < 14; i++) {
    // Reset the array for each character
    solution = [];
    // Add the current element to the array as the first element
    solution.push(message[i]);
    // Now start a second lopp for the following 13 characters
    for (let j = 1; j < 14; j++) {
        // If the current element isn't in the array add it
        if (!solution.includes(message[j+i])) {
            solution.push(message[j+i]);
        } else {
            // If the current element already has been in the element stop the loop by setting j to 14 and try it again for the next character
            j = 14;
        }
    }
    // Count how many characters were needed to find 13 distinct following characters
    neededCharacters++;
}

console.log(solution);
// We add 13, because the inner for loop does not get added to the needed characters till the end
console.log(neededCharacters + 13);
