import * as fs from "fs";

// Read the content of the file and create a array containing all data, splitted by a new line (\n)
const input = fs.readFileSync("src/Day-01/input.txt", "utf-8");
const elvesInventory = input.split("\n");

// Create variables for the highest amount of candy and a variable to hold the amount of candy he holds
let highest = 0;
let amountOfCandy = 0;


elvesInventory.forEach((food) => {
    // If we arrive at a empty line, we check if the amount of candy is higher then the highest and reset the variable
    if (food == "\r") {
        if (amountOfCandy > highest) {
            highest = amountOfCandy;
        }
        amountOfCandy = 0;
    } else {
        // Trim the string so we can convert it to a integer and add it to the current holder
        const value = food.trim();
        amountOfCandy += parseInt(value);
    }
});

// Return the highest amount
console.log("Result: ", highest);
