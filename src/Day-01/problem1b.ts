import * as fs from "fs";

// Read the content of the file and create a array containing all data, splitted by a new line (\n)
const input = fs.readFileSync("src/Day-1/input.txt", "utf-8");
const elves = input.split("\n");

// Create an empty array which will hold all the data (not the best way to do it)
let results = [];

let amountOfCandy = 0;

elves.forEach((food) => {
    
    // Add the amount the the array if we reached the end of a group
    if (food == "\r") {
        results.push(amountOfCandy);        
        amountOfCandy = 0;
    } else if (food == elves[elves.length-1].valueOf()) {
        // If it is the last entry in the array also add it
        const value = food.trim();
        amountOfCandy += parseInt(value);
        results.push(amountOfCandy);
    } else {
        // Else keep on adding the numbers
        const value = food.trim();
        amountOfCandy += parseInt(value);
    }
});

// Sort the array, if the number is lower, move it one back, if it is higher, move it forward or let it stay in the same place
results.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b){
        return 1;
    } else {
        return 0;
    }
});

// Add the first three entrie, as these are the highest
const result = results[0] + results[1] + results[2]

console.log("Result: ", result);
