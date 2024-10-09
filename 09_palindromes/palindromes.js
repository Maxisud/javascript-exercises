const palindromes = function (word) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    let filteredWord = word.toLowerCase().split('').filter(item => alphabet.includes(item.toLowerCase())).join("");
    let reversedWord = filteredWord.split("").reverse().join("");
    if (filteredWord === reversedWord) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes("racecar!"));

// Do not edit below this line
module.exports = palindromes;
