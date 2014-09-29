// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

var largestPalindrome = function(){
  var maxPalindrome=0;
  for(var i=999; i>99; i--){
    for(var n=999; n>99; n--){
      product=n*i;
      //check if the product is a palindrome
      if(product.toString().split('').reverse().join('')==product.toString()){
        // console.log("palindrome", product)
        // console.log("n", n);
        // console.log("i", i);
        if(product>maxPalindrome){
          maxPalindrome=product;
        }
      }
    }
  }
return maxPalindrome;
};

console.log(largestPalindrome());


//get example solution for largest palindrome by product of two 2-digit numbers

// var largestPalindrome = function(){
//   for(var i=100; i>0; i--){
//     for(var n=100; n>0; n--){
//       number=n*i;
//       if(number.toString().split('').reverse().join('')==number.toString()){
//         console.log("palindrome", number)
//         console.log("n", n);
//         console.log("i", i);
//         return "n:"+ n + "i:"+i
//       }
//     }
//   }
// }


// console.log(largestPalindrome())



