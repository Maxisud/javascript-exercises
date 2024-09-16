const reverseString = function(word) {
    let arrayWord = word.split("");
    let newWord = [];
    let n = 0;
    for(let i = arrayWord.length; i >= 0; i--){
        newWord[n] = arrayWord[i];
        n++;
    }
    return newWord.join("");
};


// Do not edit below this line
module.exports = reverseString;
