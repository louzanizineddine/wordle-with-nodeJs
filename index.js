import chalk from "chalk";
import inquirer from "inquirer";
import {wordsList} from "./wordsList.js";
import Wordle from "./wordle.js";
import readline from "readline-sync"

console.log("Welcome to Wordle")
let game = new Wordle();
for (let i = 0; i < 6; i++) {
    console.log("\t try to guess the word \t")
    let guess = readline.question();
    while (guess.length !== 5 || !wordsList.includes(guess)) {
        console.log("\t your input is not valid english word")
        guess = readline.question().toLowerCase();
    }
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
        console.log("and the word is ..........")
        setTimeout(() => {
            console.log("the right word is ", chalk.green(game.todayWord))
        } , 2000)

    }
}

// function getList(numberOfIntegers, modulo , sum , product) {
//
// }
//
// function getDivisors(product , filteredBy , sum , ) {
//     // Vector to store half of the divisors
//     let v = [];
//     for (let i = 1; i <= Math.sqrt(product); i++) {
//         if (product % i === 0) {
//             v.push(i);
//         }
//     }
//
//     return v.filter((num => (num % 10 === filteredBy) && num < sum));
// }
// //
// //
//
// // function findSubarrays(nums, target)
// // {
// //     for (let i = 0; i < nums.length; i++)
// //     {
// //         sumSoFar = 0;
// //
// //         // consider all subarrays starting from `i` and ending at `j`
// //         for (j = i; j < nums.length; j++)
// //         {
// //             // sum of elements so far
// //             sumSoFar += nums[j];
// //
// //             // if the sum so far is equal to the given sum
// //             if (sumSoFar === target) {
// //                 print(nums, i, j);
// //             }
// //         }
// //     }
// // }
// //
// // console.log(getDivisors(1622016 , 6 , 344))
//
//
// let isPrime = function (number) {
//     for (let i = 2 ; i <= Math.sqrt(number);i++){
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true
// }
//
// function sumDigits(num){
//     let sum = 0;
//     let numString = num + "";
//     for ( let i = 0; i < numString.length; i++ ){
//         sum = sum + Number(numString.charAt(i));
//     }
//     return sum;
// }
// let sum = [];
// for (let i = 2; i < 1000000 ; i++) {
//     if (isPrime(i)) {
//         sum.push({prime : i , sumOfDigits: sumDigits(i)})
//     }
// }
//
// console.log(sum)