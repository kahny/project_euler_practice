// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

function largestPrimeFactor(number) {
  var i = 2;
  while (i <= number) {
    if (number % i == 0) {
        number /= i;
    } else {
        i++;
    }
  }
return i
}

console.log(largestPrimeFactor(600851475143))





//*BRUTE FORCE* & inefficient memory to run 600851475143

// var largestPrimeFactor = function(number){
//   for(var i=Math.floor(number/2); i>1; i--){
//     console.log("i", i);
//     if(number%i==0){
//       // console.log("number%i", number%i)
//       var prime = true;
//       for(var n=2; n<i; n++){
//         if(i%n==0){
//           prime=false;
//         }
//       }
//       if(prime==true){
//         return i;
//       }
//     }
//   }
// }

// console.log(largestPrimeFactor(13195))


