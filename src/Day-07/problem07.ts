import * as fs from "fs";

const MAXSIZE = 100000;

const input = fs
    .readFileSync("src/Day-07/example.txt", "utf-8")
    .replace(/\r/g, "");

const commands = input.split("\n");

// bei jedem cd neues Arr
// bei jedem cd.. aus subarray gehen

let directories = [];
let directory = {
    name: "",
    size: 0,
};

let solution = 0;

// Go trough each character
commands.forEach((element) => {
    let currentValue = element.valueOf();

    // If the current command is a command
    if (currentValue.match(/[$] /gm) && currentValue.includes("cd")) {
        // Trim the current command so that only the new directory is available
        const currentDirectory = currentValue.substring(
            currentValue.indexOf("cd") + 3
        );

        directories.push(directory);
        directory = {
            name: "",
            size: 0,
        };

        if (currentDirectory != "..") directory.name = currentDirectory;
        else {
            console.log(directories);
        }
    } else if (currentValue.match(/\d /gm)) {
        element = element.substring(0, element.indexOf(" "));
        directory.size += parseInt(element);
    }
});

console.log(directories);
console.log(solution);
