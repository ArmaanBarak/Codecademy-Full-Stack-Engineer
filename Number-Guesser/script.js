let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

// project extension 1
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {

    // project extension 2
    if (humanGuess > 9 || humanGuess < 0) {
        console.log('Your guess is outside the range 0 - 9!');
    }

    if (getAbsoluteDistance(humanGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
        return true;
    }
    else {
        return false;
    }
};

const updateScore = winner => {
    winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}

