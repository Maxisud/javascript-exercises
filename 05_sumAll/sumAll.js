const sumAll = function(firstNum, secondNum) {
    let result = 0;
    if (typeof firstNum != 'number' || typeof secondNum != 'number' || firstNum < 0 || secondNum < 0 || firstNum % 1 !== 0 || secondNum % 1 !== 0){
        return "ERROR";
    } else {
        if (firstNum < secondNum){
            for(let i = firstNum; i <= secondNum; i++){
                result += i;
            }
        } else if (firstNum > secondNum){
            for(let i = firstNum; i >= secondNum; i--){
                result += i;
            }
        }
    }
    
    

    return result;

    
};

console.log(sumAll(3, -1));

// Do not edit below this line
module.exports = sumAll;
