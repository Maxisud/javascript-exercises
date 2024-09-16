const removeFromArray = function (theArray, ...values) {
    let counter = 0;
    for (i = 0; i < theArray.length; i++) {
        for(j = 0; j < values.length; j++) {
            if (theArray[i] === values[j]) {
                theArray.splice(i, 1);
                i = 0;
            }
        };
    }

    return theArray;
};

console.log(removeFromArray([1, 2, 3, 4], 4, 3));

// Do not edit below this line
module.exports = removeFromArray;
