import * as fs from "fs";

const input = fs.readFileSync("src/Day-05/example.txt", "utf-8");
const sections = input.split("\n");

let commands;

let result = 0;

// Circle trough all entries of the list
sections.forEach((section) => {
    section = section.replace("\r", "");

    

    console.log("section");
    console.log(section);
    

});

console.log(result);
