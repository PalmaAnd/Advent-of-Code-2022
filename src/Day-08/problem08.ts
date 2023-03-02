import * as fs from "fs";

var visibleTrees = 0;

const input = fs
    .readFileSync("src/Day-08/example.txt", "utf-8")
    .replace(/\r/g, "");

const rows = input.split("\n");

var grid = {};

for (let i = 0; i < rows.length; i++) {
    grid[i] = rows[i].split("");
}

console.log(grid[1][2]);




