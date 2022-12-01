import * as fs from "fs";

const input = fs.readFileSync("Day-1/input.txt", "utf-8");
const elves = input.split("\n");

let results = [];

let temp = 0;

elves.forEach((food) => {
    
    if (food == "\r") {
        results.push(temp);        
        temp = 0;
    } else if (food == elves[elves.length-1].valueOf()) {
        const value = food.trim();
        results.push(parseInt(value));
    } else {
        const value = food.trim();
        temp += parseInt(value);
    }
});
results.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b){
        return 1;
    } else {
        return 0;
    }
});

const result = results[0] + results[1] + results[2]

console.log("Result: ", result);
