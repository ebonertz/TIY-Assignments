<doctype! JavaScript>
//Fibonacci Sequece
//Find the sum of all even numbers in the Sequence less than 4,000,000

var i;
var sum = 0;
var c = 0;
var n = 4000000;
var fibonacci = [0, 1];


  for (var i = 2; c < n; i++) {
    fibonacci[ i ] = fibonacci[ i - 1 ] + fibonacci[ i - 2 ];

    if (fibonacci[i]%2 === 0){
      sum = sum + fibonacci[i];
    }

    c = fibonacci[i];
  }

console.log("The sum of all even terms in the Fibonacci sequence that do not exceed 4,000,000 is: " + sum);

//4613732
