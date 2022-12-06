import * as fs from "fs";

const input = fs.readFileSync("src/Day-04/input.txt", "utf-8");
const sections = input.split("\n");

let result = 0;

let elfA, elfB;

// Circle trough all entries of the list
sections.forEach((section) => {
    section = section.replace("\r", "");

    // Split each second into two parts
    elfA = section.split(",")[0].split("-");
    elfB = section.split(",")[1].split("-");

    // Check if elfB is completly covered by elfA
    if (
        parseInt(elfA[0]) <= parseInt(elfB[0]) &&
        parseInt(elfA[1]) >= parseInt(elfB[1])
    ) {
        result++;
    } else if (
        // Check if elfA is completly covered by elfB
        parseInt(elfB[0]) <= parseInt(elfA[0]) &&
        parseInt(elfB[1]) >= parseInt(elfA[1])
    ) {
        result++;
    }
});

console.log(result);
