import * as fs from "fs";

const input = fs.readFileSync("Day-1/input.txt", "utf-8");
const elves = input.split("\n");

let highest = 0;
let temp = 0;

elves.forEach((food) => {
    
    if (food == "\r") {
        if (temp > highest) {
            highest = temp;
        }
        temp = 0;
    } else {
        const value = food.trim();
        temp += parseInt(value);
    }
});

console.log("Result: ", highest);
