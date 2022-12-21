import * as fs from "fs";

const MAXSIZE = 100000;

const input = fs
    .readFileSync("src/Day-07/input.txt", "utf-8")
    .replace(/\r/g, "");

const commands = input.split("\n");

// Create an array were we store all directories
let directories = [];

// Create an empty directory object
let directory = {
    name: "",
    size: 0,
};

let solution = 0;

let lastDir = "";

commands.forEach((element) => {
    let currentValue = element.valueOf();

    // If the current command is a command
    if (currentValue.match(/[$] /gm) && currentValue.includes("cd")) {
        // Trim the current command so that only the new directory is available
        const currentDirectory = currentValue.substring(
            currentValue.indexOf("cd") + 3
        );

        if (currentDirectory != "..") {
            directories.push(directory);
            directory = {
                name: lastDir + currentDirectory,
                size: 0,
            };
            lastDir +=
                currentDirectory != "/"
                    ? currentDirectory + "/"
                    : currentDirectory;
        } else {
            lastDir = "";
        }
    } else if (currentValue.match(/\d /gm)) {
        element = element.substring(0, element.indexOf(" "));
        directory.size += parseInt(element);
    }
});

// Add the last directory
directories.push(directory);

for (let index = 0; index < directories.length; index++) {
    for (let j = index + 1; j < directories.length; j++) {
        if (directories[j].name.indexOf(directories[index].name) >= 0) {
            directories[index].size += directories[j].size * 2;
        }
    }
}

for (let index = 0; index < directories.length; index++) {
    if (directories[index].size < MAXSIZE) {
        solution = Math.max(solution, directories[index].size);
    }
}

console.log(solution);
