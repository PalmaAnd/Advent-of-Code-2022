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

# This function creates a folder with certain files inside, automatically with
# the current number of day
create_folder_and_files_automated() {
    today="$(date +'%d')"
    if [ ! -d "src/Day-$today" ]
    then
        mkdir "src/Day-$today"
        touch "src/Day-$today/input.txt"
        touch "src/Day-$today/example.txt"
        touch "src/Day-$today/problem$today.ts"
        touch "src/Day-$today/problem$today-b.ts"
    fi
}

###
# Main body of script starts here
###
echo "Welcome to this little script."
echo "This script will create a folder, with the given number you give it as the ending character, or directly with the current day."
echo "Developed by Palma Andrè."

create_folder_and_files_automated
# create_folder_and_files