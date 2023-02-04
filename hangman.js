import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

const wordBank = ["paradiddle", "thiccboi", "oreos", "quests", "spackle", "smashburger"];
let randomWord = wordBank[Math.floor(Math.random) * wordBank.length];
let answerWord = [randomWord];



let userGuess = prompt("Guess a letter!...if you dare");

let limitChar = (element) => {
    const maxChar = 1;
    
    let ele = document.getElementById(element.id);
    let charLen = ele.value.length;
    
    let p = document.getElementById('charCounter');
    p.innerHTML = maxChar - charLen + ' characters remaining';
    
    if (charLen > maxChar) 
    {
        ele.value = ele.value.substring(0, maxChar);
        p.innerHTML = 0 + ' characters remaining'; 
    }
}

let goodGuess = [];

function validateLetter(userGuess) {
    if (userGuess == /[^a-zA-Z]+$/) {
        goodGuess.push(userGuess);
    } else {
    return "Please enter a letter"
} }

