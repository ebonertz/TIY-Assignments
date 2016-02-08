<doctype! JavaScript>
//Fibonacci Sequece
//Find the sum of all even numbers in the Sequence less than 4,000,000

var i;
var sum = 0;
var curVal = 0;
var maxVal = 4,000,000;
var fibonacci = [0, 1];


  for (var i = 2; i < n; i++) {
    fibonacci[ i ] = fibonacci[ i - 1 ] + fibonacci[ i - 2 ];
    console.log(fib);
}
//By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, find the sum of the even-valued terms.
var sum1 = 0;
var i;
var fib = []; // Initialize array!
//place 0 in array fib set to 0, place 1 in array fib set to 1
fib[0] = 0;
fib[1] = 1;
//start at 2 (pos 3 in array fib) and iterate by 1 33 times
for(i=2; i<=33; i++)
{
    // Next fibonacci number = previous + one before previous
    fib[i] = fib[i-2] + fib[i-1];
    //if number is divisible by 2 pass it to fib[i], and add each divisible number to a sum recursively then log the array
    if(fib[i]%2 === 0){
      sum1 += fib[i];
      // console.log(fib[i]);
    }
  }
console.log("The sum of all even terms in the Fibonacci sequence that do not exceed 4,000,000 is: " + sum1);
