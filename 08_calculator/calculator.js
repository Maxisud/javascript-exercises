const add = function(firstValue, secondValue) {
  return firstValue + secondValue;
};

const subtract = function(firstValue, secondValue) {
	return firstValue - secondValue;
};

const sum = function(arrayValue) {
  let result = 0;
	for(value of arrayValue){
    result += value;
  }
  return result;
};

const multiply = function(arrayValue) {
  let result = 1;
	for(value of arrayValue){
    result *= value;
  }
  return result;
};

const power = function(firstValue, powerValue) {
	return Math.pow(firstValue, powerValue);
};

const factorial = function(value) {
	let result = 1;
  for(i = value; i >= 1; i--){
    result *= i;
  }
  return result;
};

console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
