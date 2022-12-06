import * as fs from "fs";

const input = fs.readFileSync("src/Day-4/example.txt", "utf-8");
const sections = input.split("\n");

let result = 0;

let elfA, elfB;

// Circle trough all entries of the list
sections.forEach((section) => {

    section = section.replace("\r", "");

    elfA = section.split(',')[0].split('-');
    
    elfB = section.split(',')[1].split('-');

    
    
    if ((elfA[0] <= elfB[0] && elfA[1] >= elfB[1])
        || (elfB[0] <= elfA[0] && elfB[1] >= elfA[1])) {
            console.log(elfB[0] + " smaller " + elfA[0]);
            console.log(elfB[1] + " bigger " + elfA[1]);
            console.log(elfB[1] >= elfA[1]);
            console.log("======");
            
        result++;
    }
    
    
});

console.log(result);

