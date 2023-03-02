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

// Check all values on the left, or right
function checkRowVisible(row:number, value:number):boolean {
    for (let column = 0; column < rows.length; column++) {
        if (grid[row][column] > value) return false;
    }
    return true;
}

// Check all values above, or underneath
function checkColumnVisible(column:number, value:number):boolean {
    for (let row = 0; row < rows.length; row++) {
        if (grid[row][column] > value) return false;
    }
    return true;
}

for (let row = 0; row < rows.length; row++) {
    for (let column = 0; column < rows.length; column++) {
        if (checkRowVisible(row, grid[row][column]) || checkColumnVisible(column, grid[row][column])) visibleTrees++;
    }
}

console.log(visibleTrees);
