/* 
This project is aimed to implement 10 methods from lodash.js library.
These will add new functionality to the numbers, strings, objects and arrays.
The test file contains different tests for the tasks to be done.
The project is meant to be completed if all tests available in the files in test directory passes.
Else test-all.js can be ran to test all of the methods with the test cases.
*/


// Project begins here
const _ = {

    // First method to implement: .clamp()
    clamp( number, lowerBound, upperBound ) {
        
        // Calculating the clamped value
        const lowerClampedValue = Math.max(number, lowerBound);
        const clampedValue = Math.min(upperBound, lowerClampedValue);

        return clampedValue;
    },

    // Second method to implement: .inRange()
    inRange( number, startVal, endVal=null ) {

        if (endVal === null) {
            endVal = startVal;
            startVal = 0;
        };
        
        if (startVal > endVal) {
            let tempVal = startVal;
            startVal = endVal;
            endVal = tempVal;
        };

        return (number < startVal || number >= endVal) ? false : true;
    },

    // Third method to implement: .word()
    // this method only splits on whitespace characters
    words( string ) {
        return string.split(' ');
    },

    // Fourth method to implement: .pad()
    // only adds spaces
    pad( string, length ) {

        if (length <= string.length) {
            return string;
        }

        const totalPadLength = length - string.length;

        const beginningLength = Math.floor(totalPadLength / 2);
        const endingLength = Math.ceil(totalPadLength / 2);

        const newStr = ' '.repeat(beginningLength) + string + ' '.repeat(endingLength);
        return newStr;
    },

    // Fifth method to implement: .has()
    // only checks for key not path
    has( object, key ) {
        
        return object[key] === undefined ? false : true;
    },

    // Sixth method to implement: .invert()
    invert ( object ) {

        newObj = {};

        for (const [key, value] of Object.entries(object)) {
            newObj[value] = key;
        };

        return newObj;
    },

    // Seventh method to implement: .findKey()
    findKey ( obj, func ) {

        for (const [key, value] of Object.entries(obj)) {

            if (func(value)) {
                return key;
            }
            
        };

        return undefined;
    },

    // Eight method to implement: .drop()
    drop ( array, n=1 ) {
        return array.slice(n);
    },

    // Ninth method to implement: .dropWhile()
    dropWhile ( array, predicate ) {
        
        dropIdx = array.findIndex((ele, idx) => {
            return !predicate(ele, idx, array);
        });

        return this.drop(array, dropIdx);

        /* Second solution code:
        let idx = 0;
        let val = array[0];
        
        while (predicate(val, idx, array) === true) {
            idx += 1;
            console.log('in loop: ' + idx);
            val = array[idx];
        }
        console.log(idx);
        return array.slice(idx);
        */
    },

    // Tenth and the last method to implement: .chunk()
    chunk ( array, n=1 ) {
        let newArray = [];

        for (let i = 0; i < array.length; i += n) {

            let arrayChunk = array.slice( i, i + n );
            newArray.push(arrayChunk);

        };

        return newArray;
    }
};


// Do not write or modify code below this line.
module.exports = _;