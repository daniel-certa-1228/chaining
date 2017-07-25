console.log( "chaining.js" );

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let newIntegers = integers.sort((a,b) => b - a ).filter((number) => number < 19).map((number) => (number * 1.5) - 1).reduce( (prev, curr)  => prev + curr);


console.log( "newIntegers", newIntegers );