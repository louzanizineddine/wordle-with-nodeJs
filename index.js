import chalk from "chalk";
import inquirer from "inquirer";
import Wordle from "./wordle.js";
import readline from "readline-sync"
console.log("Welcome to Wordle")
let game = new Wordle();
for (let i = 0; i < 6 ; i++) {
    console.log("\t try to guess the word \t")
    let guess = readline.question();
    game.userGuess[0].value = guess[0]
    game.userGuess[1].value = guess[1]
    game.userGuess[2].value = guess[2]
    game.userGuess[3].value = guess[3]
    game.userGuess[4].value = guess[4]
    if (guess === game.todayWord) {
        console.log("good guess congratulation");
        break;
    }
    game.evaluateGuess();
    game.gameSetUP()
    if (i === 5) {
        console.log("reached the max number of tries")
        console.log("the right word is "  , game.todayWord)
    }
}









