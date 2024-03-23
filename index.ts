#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("\t\tWellcome To Cli Number Guessing Game ! \n");

const answer = await  inquirer.prompt([{
    message : "Please guess a Number : ",
    type : "number",
    name : "userGuessNumber"
},]);

if(answer.userGuessNumber === randomNumber){
    console.log("\nCongratulations! You guess Right Number. ");

}
else{
    console.log("\nYou Select Wrong Number, Please Try Again ");

}