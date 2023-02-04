* Print initial game state
* Prompt the user for a letter input
* Validate input is letter
    * if input is not letter print error message
    * if input is letter modify game state 
* Repeat



# Game State
* Word bank = array of strings %
* letters guessed (array of letters) %
* guess count (number) %
* target word (string) %
* target word string tracker 




# Static Variables
* Max guesses
* Winner winner


# Approach
* Game state should be modeled as an object
* Create a function called updateGameState
    * should take old gamestate as a peramater and return a new gamestate
* create function validateUserInput
* create function called gameLoop
    * gameLoop runs until user wins or loses
* Call gameLoop should be only top level call



# Resources 
* https://nodejs.org/api/readline.html#readline
 ```javascript
 import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });
```
* https://developer.mozilla.org/en-US/docs/Web/JavaScript