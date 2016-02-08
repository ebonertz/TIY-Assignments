<doctype! JavaScript>
### JavaScript Practice

/**
 * For each of the following Array methods,
 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!
**/

// .sort() - Sorts the elements of an array in place and returns the array
//  arr.sort([compareFunction])
var nachos = ["chips", "cheese", "carne", "salsa", "guac"];
nachos.sort();
console.log(nachos);
// --> [ 'carne', 'cheese', 'chips', 'guac', 'salsa' ]

// .concat() - Returns a new array comprised of this array joined with other arrays and/ or values
var nachos = ["chips", "cheese", "carne", "salsa", "guac"];
var delux = ["beans", "jalepenos"];
var nachosDelux = nachos.concat(delux);
console.log(nachosDelux);
// --> [ 'chips', 'cheese', 'carne', 'salsa', 'guac', 'beans', 'jalepenos' ]

// .indexOf() Finds the index of an item in an array
var nachos = ["chips", "cheese", "carne", "salsa", "guac"];
console.log(nachos.indexOf("cheese"));
// --> 1

// .split() - Splits a string object into an array of strings by separating the string into substrings
// string.split([separator][, limit]);
// Seperator- Specifies the character to use for separating the string
// Limit - Specifies  a limit on the number of splits to be found
var nachos = "Chicken And Cheese Nachos";
console.log(nachos.split(" ",4 ));
// --> ['Chicken', 'And', 'Cheese', 'Burrito' ]

// .join() Joins all elements of an array into a string
// str = arr.join([separator = ','])
var nachos = ["chips", "cheese", "carne", "salsa", "guac"];
console.log(nachos.join(" and "));
//--> chips and cheese and carne and salsa and guac

// .pop() - Removes the last item from the end of an array
var nachos = ["chips", "cheese", "carne", "salsa", "guac"]
var nachos = nachos.pop()
console.log(nachos)
//--> [ 'chips', 'cheese', 'carne', 'salsa' ]

// .push() - Adds to the end of an array
//adds one or more elements to the end of an array and returns the new length of the array.
var nachos = ["chips", "cheese", "carne", "salsa", "guac"];
var nachos = nachos.push("lettuce");
console.log(nachos);
//--> 6

// .slice() Extracts a section of an array and then returns a new array.
// arr.slice([begin[, end]])
var nachos = ["chips", "cheese", "carne", "salsa", "guac"];
console.log(nachos.slice(1,3));
//--> [ 'cheese', 'carne' ]


// .splice() - Remove an item by Index position
var nachos = ["chips", "cheese", "carne", "salsa", "guac"]
console.log(nachos.splice(1, 2));
//--> [ 'cheese', 'carne', 'salsa' ]

// .shift() - Removes the first element from an array and returns that element. This method changes the length of the array.
var nachos =["chips", "cheese", "carne", "salsa", "guac"]
console.log(nachos.shift());
//--> chips

// .unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array
var nachos =["chips", "cheese", "carne", "salsa", "guac"]
console.log(nachos.unshift("lettuce"));
//-->6

// .filter() - Creates a new array will all the of the elements for which the provided filtering function returns true
// arr.filter(callback[, thisArg])
function bigger(value) {
  return value >= 10;
}
var filtered = [5, 10, 15, 20,  23].filter(bigger);
console.log(filtered)
//--> [ 10, 15, 20, 23 ]

// .map() - Creates a new array with the results of calling a provided function on every element in this array
var numbers = [1, 4, 9];
var squareRoots = numbers.map(Math.sqrt);
console.log(squareRoots);
//--> [1, 2, 3]
