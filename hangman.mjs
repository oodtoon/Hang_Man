import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const WORD_BANK = ["paradiddle", "thiccboi", "oreos", "quests", "spackle", "smashburger", "dragonfamilyvalues", "pretzels", "newlocks", "youtube", "saladbowl", "root", "batteries", "butterfly", "googlehomeisalwayslistening", "eldorado", "familydollar", "mug", "toast", "listenhereyoulittle", "bowling", "baileys", "sushi", "florida"];
const MASK_CHAR = "_ ";
const randomIndex = Math.floor(Math.random() * WORD_BANK.length);
let randomWord = WORD_BANK[randomIndex];
const correctGuesses = [];
let guessCount = 0
const MAX_GUESSES = 6
let maskedWord = buildMaskedWord(randomWord)
const LETTERS_GUESSED = [];

function buildMaskedWord(word) {
    let builder = "";
    for (let i = 0; i < word.length; i++) {
        builder = builder.concat(MASK_CHAR)
    }
    return builder;
}

const regularExpression = /[a-zA-Z]+$/
function validateLetter(userGuess) {
    if (regularExpression.test(userGuess) && userGuess.length === 1) {

        return true;
    } else {
        return false
    }
}

function updateState(guess) {
    if (isCorrectGuess(guess)) {
        correctGuesses.push(guess);
        maskedWord = replaceMaskedChar(guess);
    } else if (LETTERS_GUESSED.includes(guess)) {
        console.log(`You already guessed "${guess}"! Try something different!`)
    } else {
        guessCount++;
        LETTERS_GUESSED.unshift(guess);
    }

    console.log(`Guesses Remaing: ${guessCount}/${MAX_GUESSES}`);
    console.log(`Guessed letters: ${LETTERS_GUESSED}`);
    console.log(maskedWord);

}



function replaceMaskedChar() {
    let builder = "";
    for (let i = 0; i < randomWord.length; i++) {
        let character = randomWord[i].toLowerCase()
        if (correctGuesses.includes(character)) {
            builder = builder.concat(character, " ");
        } else {
            builder = builder.concat(MASK_CHAR);
        }
    }

    return builder;
}

function isCorrectGuess(guess) {
    return randomWord.includes(guess);
}

function hasWon() {
    return !maskedWord.includes(MASK_CHAR)
}


function hasLost() {
    if (guessCount >= MAX_GUESSES) {
        return true;
    } else {
        return false;
    }

}

let isDone = false
async function gameLoop() {
    const rl = readline.createInterface({ input, output });
    while (!isDone) {
        const userGuess = await rl.question('Guess a letter!...if you dare ');
        const trimmedGuess = userGuess.trim().toLowerCase()
        const isValid = validateLetter(trimmedGuess)
        console.log(`Let's see if "${userGuess}" is in the word`);
        if (isValid) {
            updateState(trimmedGuess)
            if (hasLost()) {
                isDone = true
                console.log("Loser!")
                console.log(`The word (or sentence) was "${randomWord}!"`)
            } else if (hasWon()) {
                isDone = true
                console.log("winner winner looking thinner!");
            }
        } else {
            console.log('Please guess A letter (the a is capitalized to emphasize sass')
        }


    }
    rl.close();
}

gameLoop();



