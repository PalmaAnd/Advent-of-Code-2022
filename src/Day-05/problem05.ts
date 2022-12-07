import * as fs from "fs";

let result = 0;

// Remove all \r for Windows and remove whitespaces and the end
const input = fs
    .readFileSync("src/Day-05/example.txt", "utf-8")
    .replace(/\r/g, "")
    .trimEnd();

const [givenStacks, givenCommands] = input.split("\n\n");

const stack = createStacks(givenStacks);

const commands = trimCommands(givenCommands);

commands.forEach(command => {
    console.log(command);
    moveItems(stack, command.move, command.from, command.to);   
});





// for (const commands.values of object) {
    
// }

/**
 * Helper function to create an object containing the given input string with the crates and their index
 * transformed to a workable variable
 * 
 * @param inputStacks The given string containing all "crates"
 * @returns An object with all crates mapped to the right index
 */
function createStacks(inputStacks: string):object {
    // ... line makes the function detect all whitespaces and we do index % 4 == 1, because the important values are always on the fourth place
    const stackValues = inputStacks
        .split("\n")
        .map((line) => [...line].filter((val, index) => index % 4 == 1));

    // Get the indexes of each stack
    const indexes = stackValues.pop();

    // Create an empty object to work with the input data
    const returnStack = {};

    // For each line of crates given by the stack
    for (const crateLine of stackValues) {
        // Go over each element and add it to the according index
        for (let i = 0; i < crateLine.length; i++) {
            // If the index does not exist create it as an array
            if (!returnStack[indexes[i]]) {
                returnStack[indexes[i]] = [];
            }
            // Use unshift to add it at the start
            returnStack[indexes[i]].unshift(crateLine[i]);
        }
    }
    return returnStack;
}

/**
 * Helper function to create an array containing all commands as a variable
 * [
        { move: 1, from: 2, to: 1 },
        { move: 3, from: 1, to: 3 },
        { move: 2, from: 2, to: 1 },
        { move: 1, from: 1, to: 2 }
    ]
 * 
 * @param commands String containing all commands
 * @returns An object with a sorted array containing all move, from, to numbers
 */
function trimCommands(commands:string){
    const commandArray = commands.split("\n");
    
    const numbers = [];
    
    for (let index = 0; index < commandArray.length; index++) {
        const command = commandArray[index].replace('move', '')
            .replace('from', ',')
            .replace('to', ',').split(",");
        numbers.push({
            move: parseInt(command[0]),
            from: parseInt(command[1]),
            to: parseInt(command[2])
        });
    }

    return numbers;
}

// Function used to move items between stacks
function moveItems(currentStack:object, move:number, from:number, to:number) {
    for (let index = 1; index < move; index++) {
            
    }
    
}
