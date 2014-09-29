// Problem:

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

//function to determine whether a number is prime
var isPrime = function(number){
  if(number>1){
    var prime=true;
    for(var n=2; n<number; n++){
      if(number%n==0){
        prime=false;
      }
    }
    if(prime==true){
      return true;
    }else{
      return false;
    }

  }
}
// console.log(isPrime(7))

//function to get the nth prime number
var nthPrime = function(nth){
  primeCount=0;
  for(var i=2; i>0; i++){
    if(primeCount<nth){
      if(isPrime(i)){
        primeCount+=1;
        // console.log("primecount", primeCount)
        // console.log("i", i)
      }
    }else{
      return i-1;
    }
  }
};

console.log(nthPrime(10001))
