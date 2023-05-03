import * as fs from "fs";

// Set the maximum size of the directories to look for
const MAXSIZE = 100000;

const input = fs
    .readFileSync("src/Day-07/input.txt", "utf-8")
    .replace(/\r/g, "");

// Split the input into an array of commands
const commands = input.split("\n");

// Create an empty array to store directories
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

    // If the command is a "cd" command
    if (currentValue.match(/[$] /gm) && currentValue.includes("cd")) {
        // Get the new directory name from the command
        const currentDirectory = currentValue.substring(
            currentValue.indexOf("cd") + 3
        );

        // If the new directory is not the parent directory
        if (currentDirectory != "..") {
            // Add the current directory to the list of directories
            directories.push(directory);

            // Create a new directory object with the current directory name
            directory = {
                name: lastDir + currentDirectory,
                size: 0,
            };

            // Update the last directory
            lastDir +=
                currentDirectory != "/"
                    ? currentDirectory + "/"
                    : currentDirectory;
        } else {
            // Go up one directory
            lastDir = lastDir.substring(
                0,
                lastDir.lastIndexOf("/", lastDir.length - 2) + 1
            );
        }
    } else if (currentValue.match(/\d /gm)) {
        // If the command is a "du" command
        // Get the size of the current directory from the command
        element = element.substring(0, element.indexOf(" "));
        directory.size += parseInt(element);
    }
});

// Add the last directory to the list of directories
directories.push(directory);

let smallest = null;

directories.forEach((dir) => {
    // Get the total size of the directory and all subdirectories
    let sum = dir.size;


    if (sum > 8381165 && sum < smallest.size) {
        smallest = dir.name;        
    }

    for (let i = directories.indexOf(dir) + 1; i < directories.length; i++) {
        // If the current directory is a subdirectory of the current directory
        if (directories[i].name.startsWith(dir.name + "/")) {
            sum += directories[i].size;
        } else {
            // Break out of the loop if the current directory is not a subdirectory of the current directory
            break;
        }
    }

    // If the total size is less than or equal to the maximum size, add it to the solution
    if (sum <= MAXSIZE) {
        solution += sum;
    }
});

console.log(solution);
