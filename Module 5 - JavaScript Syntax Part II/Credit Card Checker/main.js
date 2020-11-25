// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [0, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// Project starts here:


// Object with keys as first digit of card and value as company name
const companies = {
    3: 'Amex (American Express)',
    4: 'Visa',
    5: 'Mastercard',
    6: 'Discover'
};


// returns true if credit card number is valid else false
// validation using Luhn algorithm
const validateCard = array => {

    // copying array to avoid mutating the existing array
    let cardNumber = array;
    let sum = 0;

    for (let i = cardNumber.length - 1; i >= 0; i -= 2) {

        // If the current index is 0 then i-1 would not be a valid number so break case
        if (i - 1 < 0) {
            sum += cardNumber[i];
            break;
        }

        // getting current number and adding it directly
        let currentNum = cardNumber[i];
        sum += currentNum;

        // getting the other number on left to current number and multiplying it by 2
        let otherNum = cardNumber[i - 1] * 2;

        // If other num is more than 9 then we subtract 9 from it
        if (otherNum > 9) {
            otherNum -= 9;
        };

        // Adding other num to sum
        sum += otherNum;

    };

    // If sum valid then return true else fasle
    return sum % 10 === 0;

};


// takes an nested array of credit card nums and returns all the invalid card numbers
const findInvalidCards = array => {
    
    let invalidCards = [];
    
    for (let cardIdx in array) {

        let currentCard = array[cardIdx];

        if (!validateCard(currentCard)) {
            invalidCards.push(currentCard);
        };

    };

    return invalidCards;
}


// finding companies who generated invalid cards
// takes in a nested array of invalid cards and returns array of companies
const idInvalidCardCompanies = array => {

    const invalidCards = findInvalidCards(array);

    const invalidCardCompanies = [];

    for (let cardIdx in invalidCards) {

        let currentCard = invalidCards[cardIdx];

        let firstDigit = currentCard[0];

        let companyName = companies[firstDigit];

        if (companyName === undefined) {
            
            console.log("Company not found! Card number: " + currentCard.join(' '));

        } else {

            if (invalidCardCompanies.includes(companyName) !== true) {
                invalidCardCompanies.push(companyName);
            };

        };
    };

    return invalidCardCompanies;

};



// Test Cases for validateCard()
/*
console.log(validateCard(valid1)); // should print true
console.log(validateCard(valid2)); // should print true
console.log(validateCard(valid3)); // should print true
console.log(validateCard(valid4)); // should print true
console.log(validateCard(valid5)); // should print true

console.log(validateCard(invalid1)); // should print false
console.log(validateCard(invalid2)); // should print false
console.log(validateCard(invalid3)); // should print false
console.log(validateCard(invalid4)); // should print false
console.log(validateCard(invalid5)); // should print false
*/



// Test Cases for findInvalidCards()
/*
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

console.log(findInvalidCards(batch)); // Test what the mystery numbers are
*/




// Final Test for checking all three functions
//console.log(idInvalidCardCompanies(batch));




// Project Extension
// helper function to convert string to array of digits
const stringToArray = string => {
    
    let array = string.split('');

    return array.map(x => parseInt);

}

// This function takes a string of digits, converts it to array of numbers and checks if its valid or not
// returns true if valid
const validateStringCard = string => {

    const creditCard = stringToArray(string);

    return validateCard(creditCard);
}



// This function converts a invalid card to valid card. It adds 1 to every digit from right 
// untill its a valid card. If the digit becomes 9 then it shifts to its left
const changeInvalidToValid = invalidCard => {

    // Copying to avoid mutating original list
    let validCard = invalidCard;

    // setting index value
    let index = validCard.length - 1

    // Loop to add 1 untill the card becomes valid
    while (!validateCard(validCard)) {

        // Adding 1 if the digit is not 9
        if (validCard[index] !== 9) {
            validCard[index] += 1;
        } 
        
        // If the digit at index is 9 or becomes 9
        else {
            index -= 1;
        }

    };

    console.log('Valid card digits: ' + validCard.join(' '));

    return validCard;

}


// Test case for validateStringCard()
console.log(validateStringCard('4539689887705798')); // should print true

// Test case for changeInvalidToValid() function
console.log(changeInvalidToValid(invalid1)); // should print a card with digits [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 8, 9, 9]