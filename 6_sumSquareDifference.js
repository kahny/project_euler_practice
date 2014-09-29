//Problem:
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumSquareDifference=function(firstN){
  var sumOfSquares = 0;
  var sumOfNums = 0;

  for(var i=1; i<=firstN; i++){
    sumOfSquares += i*i;
    sumOfNums += i;
  }

  var squareOfSum = sumOfNums*sumOfNums;
  var difference = squareOfSum - sumOfSquares;

  console.log( "squareOfSum: " + squareOfSum + " sumOfSquares: " + sumOfSquares );

  return  difference;
};

console.log(sumSquareDifference(100));