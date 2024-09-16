const repeatString = function(word, many) {
    let result = "";
    if(many < 0){
        return "ERROR";
    }
    for(let i = 0; i < many; i++){
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
