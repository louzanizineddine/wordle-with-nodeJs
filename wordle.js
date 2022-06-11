import {wordsList} from "./wordsList.js";
import chalk from "chalk";

export default class Wordle {
    constructor() {
        this.todayWord = wordsList[Math.floor(Math.random() * wordsList.length)];
        this.wordInfo = {
            firstLetter: {
                value: this.todayWord[0],
            },
            SecondLetter: {
                value: this.todayWord[1],
            },
            thirdLetter: {
                value: this.todayWord[2],
            },
            FourthLetter: {
                value: this.todayWord[3],
            },
            fifthLetter: {
                value: this.todayWord[4],
            },
        }

        this.userGuess = [
            {
                value: "",
                state: {
                    letterAndPlace: false,
                    letterOnly: false,
                    wrongLetter: true
                },
            },
            {
                value: "",
                state: {
                    letterAndPlace: false,
                    letterOnly: false,
                    wrongLetter: true
                },
            },
            {
                value: "",
                state: {
                    letterAndPlace: false,
                    letterOnly: false,
                    wrongLetter: true
                },
            },
            {
                value: "",
                state: {
                    letterAndPlace: false,
                    letterOnly: false,
                    wrongLetter: true
                },
            },
            {
                value: "",
                state: {
                    letterAndPlace: false,
                    letterOnly: false,
                    wrongLetter: true
                },
            },
        ]
    }

    evaluateGuess() {
        this.userGuess.forEach((letterGuess , i) => {
            if (this.userGuess === this.todayWord) {
                 this.gameOver = true;
                 return;
            }
            if (letterGuess.value === this.todayWord[i]) {
                letterGuess.state.letterAndPlace = true;
                letterGuess.state.letterOnly = false;
                letterGuess.state.wrongLetter = false;
                return;
            }
            if (this.todayWord.includes(letterGuess.value)) {
                letterGuess.state.letterAndPlace = false;
                letterGuess.state.letterOnly = true;
                letterGuess.state.wrongLetter = false;
                return;
            }
            if (!this.todayWord.includes(letterGuess.value)) {
                letterGuess.state.letterAndPlace = false;
                letterGuess.state.letterOnly = false;
                letterGuess.state.wrongLetter = true;
            }
        })
    }

    gameSetUP() {
        let display = ``;
        this.userGuess.forEach(letterGuess => {
            let letterDisplay;
            if (letterGuess.state.wrongLetter) {
                letterDisplay = `${chalk.red(`${letterGuess.value}`)}\t`
                display = display + letterDisplay;
                return
            }

            if (letterGuess.state.letterOnly) {
                letterDisplay = `${chalk.white(`${letterGuess.value}`)}\t`
                display = display + letterDisplay;
                return;
            }

            if (letterGuess.state.letterAndPlace) {
                letterDisplay = `${chalk.green(`${letterGuess.value}`)}\t`
                display = display + letterDisplay;

            }
        })
        console.log(display)
    }

}