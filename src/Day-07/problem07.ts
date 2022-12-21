import * as fs from "fs";

const input = fs
    .readFileSync("src/Day-07/example.txt", "utf-8");

const commands = input.split("\n");

let solution = 0;

// Go trough each character
commands.forEach(element => {
    if (element.valueOf().match(/\d /gm)) {
        element = element.substring(0, element.indexOf(" "));
        console.log(element);
    }
    
});

console.log(solution);
