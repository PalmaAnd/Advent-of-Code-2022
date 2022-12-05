#! /bin/bash

# Creates a folder with the given number at the end.
# The function also creates two .txt files after creating the folder.
create_folder_and_files() {
    read -p "Please enter the number of your day: " DAY
    if [ ! -d "src/Day-"$DAY ]
    then
        mkdir "src/Day-$DAY"
        touch "src/Day-$DAY/input.txt"
        touch "src/Day-$DAY/example.txt"
        touch "src/Day-$DAY/problem$DAY.ts"
        touch "src/Day-$DAY/problem$DAY-b.ts"
    fi
}

###
# Main body of script starts here
###
echo "Welcome to this little script."
echo "This script will create a folder, with the given number you give it as the ending character."
echo "Developed by Palma Andrè."

create_folder_and_files