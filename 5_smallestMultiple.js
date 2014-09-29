// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


var smallestMultiple = function(){
  for(var number=1; number>0; number++){
    var divisible=true;
      for(var i=1; i<21; i++){
        if(number%i!=0){
          divisible=false;
        }
      }
    if(divisible==true){
      return number;
    }
  }
}

console.log(smallestMultiple())