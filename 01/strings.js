"use strict";
// Write a function that accepts a string and returns the number of vowels in it.
const numberOfVowels = (x) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelsLength = [];
    let vowelsCount = 0;
    for (let i = 0; i < x.length; i++) {
        const letter = x.charAt(i);
        const vowelsNum = vowels.filter((data) => data === letter.toLowerCase());
        vowelsLength.push(...vowelsNum);
    }
    return vowelsLength.length;
};
const vowelsNumber = numberOfVowels("ryEAe");
console.log(vowelsNumber);
